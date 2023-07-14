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
import { AuthGuard } from 'src/modules/auth/authguard';
import { AuthService } from 'src/modules/auth/auth.service';

@Controller('publication')
export class CreatePublicationController {
  constructor(
    private readonly createPublicationService: CreatePublicationService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() body: CreatePublicationDto,
    @Req() req: Request,
  ) {
    const userId = this.authService.validateToken(req.headers.authorization.split(' ')[1])
    if(!userId) throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    try {
      const data = body;
      return await this.createPublicationService.create(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
