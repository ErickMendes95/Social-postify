import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/repository/user.repository';
import { SigninUserDTO } from './dto/signin-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository, private jwtService: JwtService) {}

  async singin(data: SigninUserDTO) {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) throw new Error('User or password are invalid');

    const password = bcrypt.compareSync(data.password, user.password);
    if (!password) throw new Error('User or password are invalid');

    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
