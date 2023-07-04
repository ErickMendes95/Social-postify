import { Test, TestingModule } from '@nestjs/testing';
import { CreatePublicationService } from './create-publication.service';

describe('CreatePublicationService', () => {
  let service: CreatePublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePublicationService],
    }).compile();

    service = module.get<CreatePublicationService>(CreatePublicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
