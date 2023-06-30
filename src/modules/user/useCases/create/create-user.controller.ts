import {
  Body,
  Controller,
  HttpStatus,
  Post,
  HttpException,
} from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';

@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    try {
      const data = body;
      return await this.createUserService.create(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
