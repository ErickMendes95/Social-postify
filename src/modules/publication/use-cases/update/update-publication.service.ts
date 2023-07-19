import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicationRepository } from '../../repository/publication.repository';
import { UpdatePublicationDto } from '../../dto/update-publication.dto';

@Injectable()
export class UpdatePublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async update(id: number, data: UpdatePublicationDto) {
    const publication = await this.publicationRepository.findById(id);
    if (!publication) throw new NotFoundException('Essa publicação não existe.');

    await this.publicationRepository.updateById(id,data);
  }
}
