import { IshortenURL } from "../interfaces/shortenURL";
import * as mongoose from 'mongoose';

export const URLSchema = new mongoose.Schema({
    original_url: {type:String, required: true},
    converted_url: {type: String, unique: true},
  });
  
  const ShortenURL = mongoose.model<IshortenURL>('ShortenURL', URLSchema);
  export default ShortenURL;

