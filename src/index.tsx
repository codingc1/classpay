import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { client } from './apollo';
import { HelmetProvider } from "react-helmet-async";

// import './App.css'

// const root = document.getElementById('root')
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <App/>
        </HelmetProvider>
      </ApolloProvider>  
    </React.StrictMode>,
);