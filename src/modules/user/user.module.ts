import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserRepository } from '@/repositories';
import { PrismaUserRepository } from '@/infra/db/repositories';
import { CreateUserUseCase } from './use-case';
import { PrismaModule } from '@/infra/db/prisma.module';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    CreateUserUseCase,
  ],
  imports: [PrismaModule],
})
export class UserModule {}
