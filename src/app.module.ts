import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_CONN}`),
    HealthModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
