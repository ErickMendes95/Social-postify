import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from '../../dto/create-publication.dto';
import { PublicationRepository } from '../../repository/publication.repository';

@Injectable()
export class CreatePublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async create(data: CreatePublicationDto) {
    const publication = await this.publicationRepository.findByTitle(
      data.title,
    );
    if (publication) throw new Error('Utilize um titulo diferente');

    await this.publicationRepository.create(data);
  }
}
