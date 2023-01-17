/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddArticleReservedDTO } from './add-article-reserved-dto';
import { ArticleReserved, ArticleReservedDocument } from './article-reserved.schema';


@Injectable()
export class ArticleReservedService {

    constructor(@InjectModel('ArticleReserved') private readonly articleReservedModel: Model<ArticleReservedDocument>) { }

    async getAlReservedArticles() {
        const articles = await this.articleReservedModel.find().exec();
        return articles;
    }

    async getReservedArticle(id: string): Promise<any> {
        const article = await this.articleReservedModel.findById(id).exec();
        return article;
    }

    async addReservedArticle(addArticleReservedDTO: AddArticleReservedDTO): Promise<ArticleReserved> {
        const newArticle = await this.articleReservedModel.create(addArticleReservedDTO);
        return newArticle;

    }

    async deleteArticle(id: string): Promise<any> {
        const deletedArticle = await this.articleReservedModel.findByIdAndRemove(id);
        return deletedArticle;
    }

}
