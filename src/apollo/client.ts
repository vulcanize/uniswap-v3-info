import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  // uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-alt',
  uri: process.env.REACT_APP_WATCHER_URI,
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

export const healthClient = new ApolloClient({
  // uri: 'https://api.thegraph.com/index-node/graphql',
  uri: process.env.REACT_APP_WATCHER_URI,
  cache: new InMemoryCache(),
})

export const blockClient = new ApolloClient({
  // uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
  uri: process.env.REACT_APP_WATCHER_URI,
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
})
