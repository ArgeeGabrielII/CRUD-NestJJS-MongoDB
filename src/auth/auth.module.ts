import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from './jwt/jwt.module';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [JwtModule],
})
export class AuthModule {}
