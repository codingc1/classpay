import { makeVar } from '@apollo/client';


 interface IRoute { 
  title: string;
  routeName: string;
  header: {
    isVisible :boolean;
  }
  footer:{
    isVisible:boolean;
  }

  isLoading: boolean;
  
}
const aa:IRoute = {title:'',routeName:'',
  header: {isVisible:false,} ,
  footer: {isVisible:true,} , isLoading:false}
export const routeVar = makeVar(aa);

// export const modifyDoumiSettingVar = (obj: {[key: string]: string[]}) => {
export const editRouteVar={
  setRoute:function(obj: IRoute) { //route name
    routeVar(obj);
  },
  setTitle:function(str: string) { //title name
    routeVar({...routeVar(), title:str});
  },
  setRouteName:function(str: string) { //
    routeVar({...routeVar(), routeName:str});
  },


  setLoading:function(boo: boolean) { //
    routeVar({...routeVar(), isLoading:boo});
  },

  
  header :{
    setVisible: function (boo:boolean) {
      routeVar({...routeVar(), header: {...routeVar().header, isVisible:boo}});
    },

  },
  footer:{
    setVisible: function (boo:boolean) {
      routeVar({...routeVar(), footer: {...routeVar().footer, isVisible:boo}});
    },
  },
  reset:function(){
    routeVar(aa)
}
}