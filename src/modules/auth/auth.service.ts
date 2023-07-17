import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { findByEmailService } from '../user/useCases/findByEmail/find-by-email-user.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private findByEmailService: findByEmailService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.findByEmailService.findByEmail(email);
    if (!user) throw new NotFoundException();

    const passMatch = compareSync(password, user.password);
    if (!passMatch) throw new UnauthorizedException();

    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
