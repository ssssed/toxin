import { Footer, Header } from '@/components/ui-ud/ui';
import './globals.scss';
import { Montserrat } from 'next/font/google';
import { Providers } from '@/hoc';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Toxin',
  description: 'Search hotel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js' />
        <script>const wow = new WOW(); wow.init();</script>
      </head>
      <body className={montserrat.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
