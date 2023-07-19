import {
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Put,
  Body,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdatePublicationService } from './update-publication.service';
import { UpdatePublicationDto } from '../../dto/update-publication.dto';
import { AuthGuard } from 'src/modules/auth/authGuard';
import { AuthenticatedUserDto } from 'src/modules/auth/dto/authUserDTO';

@Controller('publication')
export class UpdatePublicationController {
  constructor(
    private readonly updatePublicationService: UpdatePublicationService,
  ) {}

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Request()  req: AuthenticatedUserDto, 
    @Param('id') id: number,
    @Body() body: UpdatePublicationDto,
  ) {
    const data = body
    const userId = req.user.sub;
    if(userId !== id) throw new UnauthorizedException()
    try {
      return await this.updatePublicationService.update(id, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
