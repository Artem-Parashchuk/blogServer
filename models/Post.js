import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    title: { type: String, require: true },
    text: { type: String, require: true },
    imgUrl: { type: String, default: "" },
    view: { type: Number, default: 0 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: true }
);

export default mongoose.model('Post', PostSchema)