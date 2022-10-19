import "../../styles/globals.scss";
import { store } from "../app/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { SnackbarProvider } from 'notistack'
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// // If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
<SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
<Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
</SnackbarProvider>
   

  );
}
