/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddArticleDTO } from './add-article-dto';
import { Article, ArticleDocument } from './article.schema';
import { FilterArticleDTO } from './filter-article-dto';

@Injectable()
export class ArticleService {

    constructor(@InjectModel('Article') private readonly articleModel: Model<ArticleDocument>) { }

    async getAllArticles() {
        const articles = await this.articleModel.find().exec();
        return articles;
    }

    async getArticle(id: string): Promise<any> {
        const article = await this.articleModel.findById(id).exec();
        return article;
    }

    async addArticle(addArticleDTO: AddArticleDTO): Promise<Article> {
        const newArticle = await this.articleModel.create(addArticleDTO);
        return newArticle;

    }

    async getFilteredArticles(filterArticleDTO: FilterArticleDTO): Promise<Article[]> {
        const { categorie, rechercher } = filterArticleDTO;
        let articles = await this.getAllArticles();

        if (rechercher) {
            articles = articles.filter(article =>
                article.categorie.includes(rechercher) ||
                article.description.includes(rechercher)
            );
        }

        if (categorie) {
            articles = articles.filter(article => article.categorie === categorie)
        }

        return articles;
    }

    async updateArticle(id: string, addArticleDTO: AddArticleDTO): Promise<Article> {
        const updatedArticle = await this.articleModel
            .findByIdAndUpdate(id, addArticleDTO, { new: true });
        return updatedArticle;
    }

    async deleteArticle(id: string): Promise<any> {
        const deletedArticle = await this.articleModel.findByIdAndRemove(id);
        return deletedArticle;
    }

}
