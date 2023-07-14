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
import { AuthGuard } from 'src/modules/auth/authguard';
import { AuthService } from 'src/modules/auth/auth.service';

@Controller('publications')
export class FindAllPublicationController {
  constructor(
    private readonly FindAllPublicationService: FindAllPublicationService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Req() req: Request) {
    const userId = Number(
      this.authService.validateToken(req.headers.authorization.split(' ')[1]),
    );
    if (!userId)
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    try {
      const publications = await this.FindAllPublicationService.findAll(userId);
      return publications;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
