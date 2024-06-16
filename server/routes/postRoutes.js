const express = require("express");
const {
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, getAllPosts);
router.get("/:id", auth, getPostById);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;
