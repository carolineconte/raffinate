import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: { type: String, unique: true },
  image: { type: String },
  content: { type: String, required: true },
  slug: { type: String, required: true },
}, { timestamps: true })

export const Post = models?.Post || model('Post', PostSchema)