import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4pnv1i020wb01xt2zkz2hl0/master',
  cache: new InMemoryCache()
})