const express = require("express");
const { getAllPosts, getPostById, updatePost, deletePost } = require("../controllers/postController");

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
