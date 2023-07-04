import { Test, TestingModule } from '@nestjs/testing';
import { DeletePublicationService } from './delete-publication.service';

describe('DeletePublicationService', () => {
  let service: DeletePublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletePublicationService],
    }).compile();

    service = module.get<DeletePublicationService>(DeletePublicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
