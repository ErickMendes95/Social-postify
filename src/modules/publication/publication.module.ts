import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PublicationRepository } from './repository/publication.repository';
import { FindAllPublicationController } from './use-cases/findAll/find-all-publication.controller';
import { CreatePublicationController } from './use-cases/create/create-publication.controller';
import { DeletePublicationController } from './use-cases/delete/delete-publication.controller';
// import { UpdatePublicationController } from './use-cases/update/update-publication.controller';
import { FindAllPublicationService } from './use-cases/findAll/find-all-publication.service';
import { CreatePublicationService } from './use-cases/create/create-publication.service';
import { DeletePublicationService } from './use-cases/delete/delete-publication.service';
import { UpdatePublicationService } from './use-cases/update/update-publication.service';
import { UpdatePublicationController } from './use-cases/update/update-publication.controller';

@Module({
  imports: [],
  controllers: [
    FindAllPublicationController,
    CreatePublicationController,
    UpdatePublicationController,
    DeletePublicationController,
  ],
  providers: [
    PrismaService,
    PublicationRepository,
    FindAllPublicationService,
    CreatePublicationService,
    UpdatePublicationService,
    DeletePublicationService,
  ],
})
export class PublicationModule {}
