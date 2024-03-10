import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_CONN}`),
    HealthModule,
    UsersModule,
  ],
})
export class AppModule {}
