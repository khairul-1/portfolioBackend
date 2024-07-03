const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog({ ...req.body, userId: req.userData.userId });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ userId: req.userData.userId });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: req.params.id, userId: req.userData.userId },
      req.body,
      { new: true }
    );
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findOneAndDelete({
      _id: req.params.id,
      userId: req.userData.userId,
    });
    res.status(200).json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
