import { Controller, Get, HttpStatus, HttpException, Req, UseGuards } from '@nestjs/common';
import { FindAllPublicationService } from './find-all-publication.service';
import { Request } from 'express';

@Controller('publications')
export class FindAllPublicationController {
  constructor(private readonly FindAllPublicationService: FindAllPublicationService) {}

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  async findAll(@Req() request: Request){
    // const userId = request.user.id;
    try {
      const publications = await this.FindAllPublicationService.findAll(1)
      return publications;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND)
    }
  }
}
