import { Controller, HttpStatus, HttpException, Get } from '@nestjs/common';
import { findAllUserService } from './find-all-user.service';
import { User } from '@prisma/client';

@Controller('user')
export class FindAllController {
  constructor(private readonly findAllUserService: findAllUserService) {}

  @Get()
  async findAll(): Promise<Omit<User, 'password'>[]> {
    try {
      const users = await this.findAllUserService.findAll();
      return users;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
