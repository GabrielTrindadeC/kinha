import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './infra/db/prisma.module';

import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './infra/env/env';
@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({
      validate: (env) => validateEnv(env),
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
