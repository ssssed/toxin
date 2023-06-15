import { Footer } from '@/components/ui-ud/ui';
import './globals.scss';
import { Montserrat } from 'next/font/google';

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
      <body className={montserrat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
