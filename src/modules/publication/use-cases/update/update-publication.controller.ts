import {
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Put,
  Body,
} from '@nestjs/common';
import { UpdatePublicationService } from './update-publication.service';
import { UpdatePublicationDto } from '../../dto/update-publication.dto';

@Controller('publication')
export class UpdatePublicationController {
  constructor(
    private readonly updatePublicationService: UpdatePublicationService,
  ) {}

  @Put(':id')
  // @UseGuards(AuthGuard('jwt'))
  async delete(
    // @Req()  req: Request
    @Param('id') id: number,
    @Body() body: UpdatePublicationDto,
  ) {
    // const userId = request.user.id;
    try {
      return await this.updatePublicationService.update(id, body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
