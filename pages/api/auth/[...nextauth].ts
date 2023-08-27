import NextAuth from 'next-auth';

// eslint-disable-next-line no-restricted-imports
import authConfig from '@/app/configs/next-auth';

export default NextAuth(authConfig);
