/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  
  @Prop({
    type: String,
    default: () => new mongoose.Types.ObjectId().toHexString()
  })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  categorie: string;

  // @Prop()
  // fileSource: File;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
