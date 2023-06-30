import { Controller, HttpStatus, HttpException, Get, Param } from '@nestjs/common';
import { findByIdService } from './find-by-id-user.service';
import { User } from '@prisma/client';

@Controller('user')
export class FindByIdController {
  constructor(private readonly findByIdService: findByIdService) {}

  @Get(':id')
  async findAll(@Param('id') id:number): Promise<Omit<User, 'password'>> {
    try {
      const user = await this.findByIdService.findById(id);
      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
