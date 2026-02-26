import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
  { timestamps: true },
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
