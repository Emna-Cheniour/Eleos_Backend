/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

export class AddArticleDTO {
  _id: string;
  name: string;
  description: string;
  categorie: string;
  // fileSource: File;
}
