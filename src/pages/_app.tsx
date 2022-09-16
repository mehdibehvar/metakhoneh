import '../../styles/globals.scss'
import { store } from '../app/store'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}
