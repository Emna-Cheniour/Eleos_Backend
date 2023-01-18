import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { AddArticleReservedDTO } from './add-article-reserved-dto';
import { ArticleReservedService } from './article-reserved.service';

@Controller('eleos/article-reserved')
export class ArticleReservedController {
  constructor(private articleReservedService: ArticleReservedService) {}
  @Get('/')
  async getArticles() {
    const allArticles =
      await this.articleReservedService.getAllReservedArticles();
    return allArticles;
  }

  @Post('/')
  @FormDataRequest()
  // @UseInterceptors(FileInterceptor('fileSource'))
  async addArticle(@Body() addArticleReservedDTO: AddArticleReservedDTO) {
    const article = await this.articleReservedService.addReservedArticle(
      addArticleReservedDTO,
    );
    console.log(addArticleReservedDTO);

    return article;
  }

  @Get('/:id')
  async getArticle(@Param('id') id: string) {
    const article = await this.articleReservedService.getReservedArticle(id);
    if (!article) throw new NotFoundException('Article does not exist!');
    return article;
  }

  @Delete('/:id')
  async deletearticle(@Param('id') id: string) {
    const article = await this.articleReservedService.deleteArticle(id);
    if (!article) throw new NotFoundException('Article does not exist');
    return article;
  }
}
