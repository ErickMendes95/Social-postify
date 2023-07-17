import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { Publication } from '@prisma/client';
import { UpdatePublicationDto } from '../dto/update-publication.dto';

@Injectable()
export class PublicationRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePublicationDto, userId: number): Promise<void> {
    await this.prisma.publication.create({
      data: {
        image: data.image,
        text: data.text,
        title: data.title,
        dateToPublish: data.dateToPublish,
        socialMedia: data.socialMedia,
        published: data.published,
        userId
      },
    });
  }

  async findByTitle(title: string) {
    return await this.prisma.publication.findFirst({
      where: { title },
    });
  }

  async findAllByUserId(userId: number): Promise<Publication[]> {
    return await this.prisma.publication.findMany({
      where: { userId },
    });
  }

  async findById(id: number): Promise<Publication> {
    return await this.prisma.publication.findUnique({ where: { id } });
  }

  async updateById(id: number, body: UpdatePublicationDto): Promise<void> {
    await this.prisma.publication.update({
      where: { id },
      data: {
        text: body.text,
        title: body.title,
        image: body.image,
        socialMedia: body.socialMedia,
        published: body.published,
        dateToPublish: body.dateToPublish,
      },
    });
  }

  async deleteById(id: number): Promise<void> {
    await this.prisma.publication.delete({ where: { id } });
  }
}
