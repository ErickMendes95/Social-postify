import {
  Controller,
  HttpException,
  HttpStatus,
  Delete,
  Param,
  UnauthorizedException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { DeletePublicationService } from './delete-publication.service';
import { AuthenticatedUserDto } from 'src/modules/auth/dto/authUserDTO';
import { AuthGuard } from 'src/modules/auth/authGuard';

@Controller('publication')
export class DeletePublicationController {
  constructor(
    private readonly deletePublicationService: DeletePublicationService,
  ) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(
    @Request()  req: AuthenticatedUserDto,
    @Param('id') id: number,
  ) {
    const userId = req.user.sub;
    if(userId !== id) throw new UnauthorizedException()
    try {
      return await this.deletePublicationService.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
