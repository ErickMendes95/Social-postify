import {
  Controller,
  HttpException,
  HttpStatus,
  Delete,
  Param,
} from '@nestjs/common';
import { DeletePublicationService } from './delete-publication.service';

@Controller('publication')
export class DeletePublicationController {
  constructor(
    private readonly deletePublicationService: DeletePublicationService,
  ) {}

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  async delete(
    // @Req()  req: Request
    @Param('id') id: number,
  ) {
    // const userId = request.user.id;
    try {
      return await this.deletePublicationService.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
