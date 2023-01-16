/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  categorie: string;

  @Prop()
  image: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
