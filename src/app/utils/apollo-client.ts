import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://graphql.datocms.com/",
    // post
    cache: new InMemoryCache(),
    headers: {
      authorization: process.env.NEXT_DATOCMS_API_TOKEN || "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export default createApolloClient;
