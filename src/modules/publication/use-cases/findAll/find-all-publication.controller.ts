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

@Controller('publications')
export class FindAllPublicationController {
  constructor(
    private readonly findAllPublicationService: FindAllPublicationService,
  ) {}

  @Get()
  async findAll(@Req() req: Request) {
    try {
      const publications = await this.findAllPublicationService.findAll(1);
      return publications;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
