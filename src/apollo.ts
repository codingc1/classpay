import { ApolloClient, InMemoryCache, makeVar, createHttpLink, split,from, ApolloLink,  } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';//23.1
import { serverAddress, webSoketAddress } from './api/app-setting';
import { onError } from "@apollo/client/link/error";
import { ConsoleHelper } from './func/sys/consoleHelper';
import { AUTOLOGIN,LOCALSTORAGE_TOKEN } from './api/api-constants';
import { authVar } from './stores/authstore';

// import { isLoggedInVar } from './stores/auth-store';
// export const isLoggedInVar = makeVar(false)

// const token = localStorage.getItem(LOCALSTORAGE_TOKEN); //1
// const autologin = localStorage.getItem(AUTOLOGIN); 
// export const isLoggedInVar =makeVar(!!(token && autologin)); //초기는 오토로그인도 있어야 가능
// export const authTokenVar = makeVar(token); //2

export let client: ApolloClient<object>;
//23.1 웹소켓
const wsLink = new GraphQLWsLink(createClient({
  //https://www.apollographql.com/docs/react/data/subscriptions/
  url: webSoketAddress(),
  connectionParams: {//인증
    'x-jwt':'',
    'cp-jwt': authVar().token//authTokenVar() || "", //authToken: user.authToken,
  },
}));
// const wsLinkss = new WebSocketLink({ //웹소켓 링크
//   uri: webSoketAddress(),
//   // uri: 'ws:'+basicAddress()+'/graphql', //"http://localhost:2021" +
//   // uri: `ws://localhost:2021/graphql`, //'ws://localhost:2021/subscriptions',
//   options: {
//     reconnect: true,
//     connectionParams: {//인증
//       'cp-jwt':  authVar().token//authTokenVar() || "", //authToken: user.authToken,
//     },
//   }
// });

const httpLink = createHttpLink({
  uri: serverAddress()+'/graphql', 
});


const authLink = setContext(async(_, { headers }) => {
  
  // console.log(authTokenVar(), 'token')
  return {
    headers: {
      ...headers,
      "cp-jwt":authVar().token || "",
    },
  };
});
//typename 문제 해결
//https://stackoverflow.com/questions/47211778/cleaning-unwanted-fields-from-graphql-responses/51380645#51380645
const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key:any, value:any) => (key === '__typename' ? undefined : value);
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }
  return forward(operation).map((data) => {
    return data;
  });
});

//23.1 subscription
const splitLink = split( //OperationDefinition이면 wsLink로 subscription이면 authLink로 분배
  ({ query }) => {
    // console.log(authTokenVar(), 'headers apollo')
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink,),
  
  //httpLink,
);

//https://www.apollographql.com/docs/react/data/error-handling/#on-graphql-errors
const errorLink = onError(({ graphQLErrors, networkError  }) => {// , operation, forward
  if (graphQLErrors){
    graphQLErrors.forEach(({ message, locations, path }) => {
      ConsoleHelper(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      )
    }
    );
  }
    
  if (networkError) {
    ConsoleHelper(`[Network error]: ${networkError}`)}
    // alert( `network error`)
    ;
});
client = new ApolloClient({
  link: from([cleanTypeName, errorLink, splitLink]), //23.1 authLink.concat(httpLink),
  // uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    //__typename 삭제
    // addTypename: false, //https://stackoverflow.com/questions/47211778/cleaning-unwanted-fields-from-graphql-responses/51380645#51380645
    typePolicies:{
      Query:{
        fields:{
          // isLoggedIn : {
          //   read() {
          //     return isLoggedInVar()//Boolean(localStorage.getItem("token"))
          //   }
          // },
          // token: {
          //   read() {
          //     return authTokenVar();
          //   },
          // },
      

        }
      }
    }
  })
});
