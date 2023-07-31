import { NextPage } from 'next';
import { useRouter } from 'next/router';

const RoomDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <main className='page room-detail'>RoomDetail {id}</main>;
};

export default RoomDetailPage;
