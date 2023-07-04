import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(private userRepository: UserRepository) {}

  async update(id: number, data: UpdateUserDto) {
    const userExists = await this.userRepository.findById(id);
    if (!userExists) throw new Error('O usuário não existe');

    await this.userRepository.updateById(id,data);
  }
}
