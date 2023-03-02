import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "@/styles";
import "@/styles/css-override.css";

import AppLayout from "@/components/templates/AppLayout";
import Sidebar from "@/components/organisms/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { replace, pathname } = useRouter();

  useEffect(() => {
    const storedId = sessionStorage.getItem("id");

    if (!storedId && pathname !== "/login") {
      replace("/login");
      return;
    }

    if (storedId && pathname === "/login") {
      replace("/");
      return;
    }

    if (storedId && isLoading) setIsLoading(false);
  }, [isLoading, pathname, replace]);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>BRIQUE - CNA Template</title>
        </Head>

        <RecoilRoot>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            {pathname === "/login" ? (
              <Component {...pageProps} />
            ) : isLoading ? (
              <div
                style={{
                  height: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                loading...
              </div>
            ) : (
              <AppLayout>
                <AppLayout.HeaderArea>HeaderArea</AppLayout.HeaderArea>
                <AppLayout.SidebarArea>
                  <Sidebar />
                </AppLayout.SidebarArea>
                <AppLayout.MainArea>
                  <Component {...pageProps} />
                </AppLayout.MainArea>
              </AppLayout>
            )}
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
      {!!(process.env.NODE_ENV === "development") && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
