import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../app/store'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import play, { play2, play4, play5 } from '../../playground';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    play5()
  },[])
 return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
