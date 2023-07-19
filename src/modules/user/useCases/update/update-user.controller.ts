import {
  Body,
  Controller,
  HttpStatus,
  Put,
  HttpException,
  Param,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { AuthGuard } from 'src/modules/auth/authGuard';
import { AuthenticatedUserDto } from 'src/modules/auth/dto/authUserDTO';

@Controller('user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Body() body: UpdateUserDto, @Param('id') id: number, @Request() req: AuthenticatedUserDto) {
    try {
      const data = body;
      const userId = req.user.sub;
      if (userId !== id) throw new UnauthorizedException();
      return await this.updateUserService.update(id,data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
