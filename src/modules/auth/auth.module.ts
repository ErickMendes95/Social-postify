import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET_KEY,
    signOptions: { expiresIn: '300s' },
  }),
],
providers: [AuthService],
controllers: [AuthController],
exports: [AuthService],
})
export class AuthModule {}
