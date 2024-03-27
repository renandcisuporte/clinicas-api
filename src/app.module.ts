import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggerMiddleware } from './utils/logger.middleware';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  providers: [Logger],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
