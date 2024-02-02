"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  cache: new InMemoryCache(),
});

export function ApolloProviderComponent({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
