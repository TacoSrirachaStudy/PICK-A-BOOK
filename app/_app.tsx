import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface MyAppProps {
  Component: React.FC<any>;
  pageProps: Record<string, any>;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
