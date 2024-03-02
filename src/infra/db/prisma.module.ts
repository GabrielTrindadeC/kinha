import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from '@/repositories';
import { PrismaUserRepository } from './repositories';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}
