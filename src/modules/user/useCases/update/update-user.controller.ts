import {
  Body,
  Controller,
  HttpStatus,
  Put,
  HttpException,
  Param,
} from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Controller('user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Put(':id')
  async update(@Body() body: UpdateUserDto, @Param() id: number) {
    try {
      const data = body;
      return await this.updateUserService.update(id,data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
