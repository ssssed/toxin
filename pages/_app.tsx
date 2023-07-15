import '@/app/styles/index.scss';
import type { AppProps } from 'next/app';
import { Providers } from '@/app/providers';
import { Layout } from '@/widgets/layouts/base';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Providers session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
