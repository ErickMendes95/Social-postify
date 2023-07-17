import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class findByEmailService {
  constructor(private userRepository: UserRepository) {}

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error('User not found');

    return user;
  }
}
