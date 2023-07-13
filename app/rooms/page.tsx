'use client';

import { useSession } from 'next-auth/react';
import { Container } from '@/components/ui-ud/ui';
import './style.scss';
import { LeftBarWrapper, RoomsWrapper } from '@/components/search/logic';

export default function Rooms() {
  // const { data: session } = useSession();
  // console.log(session?.user.email, session?.user.lastname);
  return (
    <main className='page rooms-page'>
      <Container
        direction='row'
        gap={60}
        maxWidth={1160}
        center
      >
        <LeftBarWrapper />
        <RoomsWrapper />
      </Container>
    </main>
  );
}
