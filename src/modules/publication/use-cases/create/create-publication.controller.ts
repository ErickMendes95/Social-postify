import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Req,
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
  // @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() body: CreatePublicationDto,
    // @Req()  req: Request
  ) {
    // const userId = request.user.id;
    try {
      const data = body;
      return await this.createPublicationService.create(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
