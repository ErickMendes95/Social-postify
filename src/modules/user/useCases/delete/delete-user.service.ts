import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class DeleteUserService {
  constructor(private userRepository: UserRepository) {}

  async delete(id: number) {
    const userExists = await this.userRepository.findById(id);
    if (!userExists) throw new Error('O usuário não existe');

    await this.userRepository.deleteById(id);
  }
}
