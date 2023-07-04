import { Injectable } from '@nestjs/common';
import { PublicationRepository } from '../../repository/publication.repository';

@Injectable()
export class DeletePublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async delete(id: number) {
    const publication = await this.publicationRepository.findById(id);
    if (!publication) throw new Error('Essa publicação não existe.');

    await this.publicationRepository.deleteById(id);
  }
}
