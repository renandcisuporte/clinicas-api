import { ConfigModule } from '@nestjs/config';
// import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { LoggerMiddleware } from './utils/logger.middleware';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { Logger } from './utils/logger';

@Module({
  exports: [Logger],
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, AuthModule],
  providers: [Logger],
  controllers: [],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('*');
//   }
// }
