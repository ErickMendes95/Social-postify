import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreatePublicationService } from './create-publication.service';
import { CreatePublicationDto } from '../../dto/create-publication.dto';
import { Request } from 'express';

@Controller('publication')
export class CreatePublicationController {
  constructor(
    private readonly createPublicationService: CreatePublicationService,
  ) {}

  @Post()
  async create(
    @Body() body: CreatePublicationDto,
  ) {
    const userId = 2
    try {
      const data = body;
      return await this.createPublicationService.create(data,userId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
