import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ArticleReservedController } from './article-reserved.controller';
import { ArticleReservedSchema } from './article-reserved.schema';
import { ArticleReservedService } from './article-reserved.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ArticleReserved', schema: ArticleReservedSchema },
    ]),
    NestjsFormDataModule,
  ],
  controllers: [ArticleReservedController],
  providers: [ArticleReservedService],
})
export class ArticleReservedModule {}
