/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleReservedDocument = ArticleReserved & Document;

@Schema()
export class ArticleReserved {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  categorie: string;

  // @Prop()
  // fileSource: File;
}

export const ArticleReservedSchema = SchemaFactory.createForClass(ArticleReserved);
