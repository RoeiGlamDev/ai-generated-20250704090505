// pages/_app.js
import { AppProps } from 'next/app';
import ErrorBoundaryComponent from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundaryComponent>
      <Component {...pageProps} />
    </ErrorBoundaryComponent>
  );
}

export default MyApp;