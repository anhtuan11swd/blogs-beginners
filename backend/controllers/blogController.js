import Blog from "../models/blog.js";

export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBlog = new Blog({ description, title });
    await newBlog.save();
    res.status(200).json({ message: "Lưu dữ liệu thành công" });
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi lưu dữ liệu" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi lấy dữ liệu" });
  }
};

export const getRecentBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi lấy dữ liệu" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi lấy dữ liệu" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    await Blog.findByIdAndUpdate(req.params.id, { description, title });
    res.status(200).json({ message: "Cập nhật dữ liệu thành công" });
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi cập nhật dữ liệu" });
  }
};
