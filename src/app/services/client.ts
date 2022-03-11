import { ApolloClient, InMemoryCache } from '@apollo/client';

export const Client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
