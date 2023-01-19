/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body } from '@nestjs/common';
import { Delete, Param, Put, Query, UseInterceptors } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { FormDataRequest } from 'nestjs-form-data';
import { AddArticleDTO } from './add-article-dto';
import { ArticleService } from './article.service';
import { FilterArticleDTO } from './filter-article-dto';

@Controller('eleos/articles')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Get('/')
    async getArticles(@Query() filterArticleDTO: FilterArticleDTO) {
        if (Object.keys(filterArticleDTO).length) {
            const filteredArticles = await this.articleService.getFilteredArticles(filterArticleDTO);
            return filteredArticles;
        }
        else {
            const allArticles = await this.articleService.getAllArticles();
            return allArticles;
        }
    }

    
    @Post('/')
    @FormDataRequest()
    // @UseInterceptors(FileInterceptor('fileSource'))
    async addArticle(@Body() addArticleDTO: AddArticleDTO) {
        const article = await this.articleService.addArticle(addArticleDTO);
        console.log(addArticleDTO);
        return article;
    }

    @Get('/:id')
    async getArticle(@Param('id') id: string) {
        const article = await this.articleService.getArticle(id);
        if (!article) throw new NotFoundException('Article does not exist!');
        return article;
    }

    @Put('/:id')
    async updatearticle(@Param('id') id: string, @Body() addArticleDTO: AddArticleDTO) {
        const article = await this.articleService.updateArticle(id, addArticleDTO);
        if (!article) throw new NotFoundException('article does not exist!');
        return article;
    }

    @Delete('/:id')
    async deletearticle(@Param('id') id: string) {
        const article = await this.articleService.deleteArticle(id);
        if (!article) throw new NotFoundException('Article does not exist');
        return article;
    }
}
