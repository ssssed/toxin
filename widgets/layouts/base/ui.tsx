import { Footer } from '@/shared/ui/footer';
import { Header } from '@/shared/ui/header';
import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
