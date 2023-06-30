import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class findAllUserService {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<Omit<User, 'password'>[]> {
    const users = await this.userRepository.findAll();
    if (users.length === 0)
      throw new Error('Não existe nenhum usuário no banco');

    const usersWithoutPassword = users.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    return usersWithoutPassword;
  }
}
