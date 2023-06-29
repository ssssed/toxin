'use client';

import { useSession } from 'next-auth/react';
import { Hotels } from '@/components/search/ui';
import { Container } from '@/components/ui-ud/ui';
import './style.scss';

export default function Rooms() {
  const { data: session } = useSession();
  console.log(session?.user.email, session?.user.lastname);
  return (
    <main className='page rooms-page'>
      <Container
        direction='row'
        gap={60}
        maxWidth={1160}
        center
      >
        <Container maxWidth={266}>Left Bar</Container>
        <Hotels />
      </Container>
    </main>
  );
}
