/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ArticleReservedController } from './article-reserved.controller';

describe('ArticleReservedController', () => {
  let controller: ArticleReservedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleReservedController],
    }).compile();

    controller = module.get<ArticleReservedController>(ArticleReservedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
