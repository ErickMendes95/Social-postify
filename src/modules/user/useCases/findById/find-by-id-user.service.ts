import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class findByIdService {
  constructor(private userRepository: UserRepository) {}

  async findById(id: number): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('User not found');

    const {password, ...userWithoutPassword} = user

    return userWithoutPassword;
  }
}
