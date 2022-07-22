import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import config from './config';

const ssrMode = typeof window === 'undefined';

const httpLink = new HttpLink({
  uri: config.graphQlUri,
});

const client = new ApolloClient({
  ssrMode,
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
