import type { AppProps } from "next/app";

import AppProvider from "../components/AppProvider";
import { Hydrate } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import styles from "../styles";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Hydrate state={pageProps.dehydrateState}>
        <Global styles={styles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </AppProvider>
  );
}

export default MyApp;
