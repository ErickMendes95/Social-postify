import { Injectable } from '@nestjs/common';
import { PublicationRepository } from '../../repository/publication.repository';

@Injectable()
export class FindAllPublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async findAll(userId: number) {
    const publications = await this.publicationRepository.findAllByUserId(
      userId,
    );
    if (publications.length === 0)
      throw new Error('Usuário não possui publicações ainda');

    return publications;
  }
}
