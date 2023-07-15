import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

type ProviderType = {
  children: ReactNode;
  session: Session | null | undefined;
};

const Providers: FC<ProviderType> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
