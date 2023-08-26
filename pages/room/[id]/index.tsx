import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

const RoomDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main className='page room-detail'>
      RoomDetail {id}
      <section className='room-detail__images'>
        <Image
          src=''
          alt=''
        />
        <div>
          <Image
            src=''
            alt=''
          />
          <Image
            src=''
            alt=''
          />
        </div>
      </section>
      <section className='room-detail__content'>
        <div className='room-detail__info'>
          
        </div>
        <div className='room-detail__reserve'></div>
      </section>
    </main>
  );
};

export default RoomDetailPage;
