import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { ArticleReservedModule } from './article-reserved/article-reserved.module';

// const root = process.env.DB_CONNECTION;
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Eleos:eleos2223@eleos.qat41gs.mongodb.net/test',
    ),
    ArticleModule,
    ArticleReservedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
