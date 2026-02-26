import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  getRecentBlogs,
  updateBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/post", createBlog);

router.get("/get-all", getAllBlogs);

router.get("/get-recent-blogs", getRecentBlogs);

router.get("/get-blog/:id", getBlogById);

router.put("/update-blog/:id", updateBlog);

export default router;
