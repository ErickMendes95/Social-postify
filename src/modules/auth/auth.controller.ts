import {
  Body,
  Controller,
  HttpStatus,
  Post,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninUserDTO } from './dto/signin-user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async singin(@Body() body: SigninUserDTO) {
    try {
      const data = body;
      const token = await this.authService.singin(data);
      return token;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
