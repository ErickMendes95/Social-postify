import {
  Delete,
  Controller,
  HttpStatus,
  Param,
  HttpException,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { AuthGuard } from 'src/modules/auth/authGuard';
import { AuthenticatedUserDto } from 'src/modules/auth/dto/authUserDTO';

@Controller('user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async create(@Param('id') id: number, @Request() req: AuthenticatedUserDto) {
    const userId = req.user.sub;
    if (userId !== id) throw new UnauthorizedException();
    try {
      return await this.deleteUserService.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
