import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';

const root = process.env.DB_CONNECTION;
@Module({
  imports: [MongooseModule.forRoot(root), ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
