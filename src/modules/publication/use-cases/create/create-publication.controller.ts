import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreatePublicationService } from './create-publication.service';
import { CreatePublicationDto } from '../../dto/create-publication.dto';
import { AuthGuard } from 'src/modules/auth/authGuard';
import { AuthenticatedUserDto } from 'src/modules/auth/dto/authUserDTO';

@Controller('publication')
export class CreatePublicationController {
  constructor(
    private readonly createPublicationService: CreatePublicationService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() body: CreatePublicationDto,
    @Request() req: AuthenticatedUserDto,
  ) {
    const userId = req.user.sub
    try {
      const data = body;
      return await this.createPublicationService.create(data,userId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
