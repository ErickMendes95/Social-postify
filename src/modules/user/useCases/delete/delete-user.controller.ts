import {
  Delete,
  Controller,
  HttpStatus,
  Param,
  HttpException,
} from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';

@Controller('user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  async create(@Param() id: number) {
    try {
      return await this.deleteUserService.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
