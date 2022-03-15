import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN_KEY } from 'app/constants';

export function client(): ApolloClient<NormalizedCacheObject> {
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

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
