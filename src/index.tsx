import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { apolloClient } from './app/services';
import { AppRoutes } from 'routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <AppRoutes />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
