import type { AppProps } from 'next/app';
import { Navbar } from '../components';
import '../styles/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
