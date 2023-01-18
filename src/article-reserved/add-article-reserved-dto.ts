/* eslint-disable prettier/prettier */
import mongoose from "mongoose";

export class AddArticleReservedDTO {
  _id: string;
  name: string;
  description: string;
  categorie: string;
  // fileSource: File;
}
