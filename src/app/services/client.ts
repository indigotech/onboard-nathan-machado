import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN_KEY } from 'app/constants';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
