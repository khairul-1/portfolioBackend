const express = require("express");
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
