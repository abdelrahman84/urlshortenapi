import * as mongoose from 'mongoose';

export interface IshortenURL extends mongoose.Document {
    original_url: string;
    converted_url: string;
  }