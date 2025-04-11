// pages/_app.js
import { wrapper } from '@/store';
import '@/styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
