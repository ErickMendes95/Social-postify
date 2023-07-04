import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePublicationService } from './update-publication.service';

describe('UpdatePublicationService', () => {
  let service: UpdatePublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdatePublicationService],
    }).compile();

    service = module.get<UpdatePublicationService>(UpdatePublicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
