import {
  Controller,
  Get,
  HttpStatus,
  HttpException,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FindAllPublicationService } from './find-all-publication.service';
import { Request } from 'express';
import { AuthenticatedUserDto } from 'src/modules/auth/dto/authUserDTO';
import { AuthGuard } from 'src/modules/auth/authGuard';

@Controller('publications')
export class FindAllPublicationController {
  constructor(
    private readonly findAllPublicationService: FindAllPublicationService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Req() req: AuthenticatedUserDto) {
    const userId = req.id
    try {
      const publications = await this.findAllPublicationService.findAll(userId);
      return publications;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
