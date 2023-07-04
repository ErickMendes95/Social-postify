import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<void> {
    await this.prisma.user.create({ data: data });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }

  async findById(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async updateById(id: number, data: UpdateUserDto): Promise<void> {
    await this.prisma.user.update({ where: { id }, data: {
      avatar: data.avatar,
      name: data.name,
      password: data.password
    } });
  }

  async deleteById(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
