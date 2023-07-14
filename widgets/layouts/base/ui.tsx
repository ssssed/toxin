import { Footer, Header } from '@/shared/ui';
import React, { FC, PropsWithChildren } from 'react';
import { Providers } from '@/app/providers';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
};

export default Layout;
