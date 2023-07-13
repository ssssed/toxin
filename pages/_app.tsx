import '@/app/styles/index.scss';
import type { AppProps } from 'next/app';
import { Layout } from '@/widgets';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
