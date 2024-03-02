import { User as PrismaUser } from '@prisma/client';

export class User implements PrismaUser {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
