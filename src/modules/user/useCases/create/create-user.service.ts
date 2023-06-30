import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDto) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    const userExists = await this.userRepository.findByEmail(data.email);
    if (userExists) throw new Error('User already exists');

    await this.userRepository.create({
      ...data,
      password: passwordHash,
    });
  }
}
