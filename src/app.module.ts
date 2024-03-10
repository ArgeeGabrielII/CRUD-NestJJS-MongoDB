import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { SharedService } from './shared/shared.service';

@Module({
  imports: [UsersModule, HealthModule, AuthModule],
  providers: [SharedService],
})
export class AppModule {}
