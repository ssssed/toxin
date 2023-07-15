import { User } from '@prisma/client';
import { User as NextUser } from 'next-auth';

type _User = NextUser & User;
export interface IUser extends _User { }