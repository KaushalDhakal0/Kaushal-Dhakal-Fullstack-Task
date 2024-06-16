const Post = require("../models/Post");

// Insert dummy data if no posts exist
// const insertDummyData = async () => {
//   const count = await Post.countDocuments();
//   if (true) {
//     const dummyPosts = [
//       {
//         title: "Finance",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel enim posuere congue. Vestibulum pharetra erat quis leo ultrices, at varius justo ultricies. Sed sit amet varius ligula.",
//         author: "Kaushal Dhakal",
//         authorId: "jhasdyadf"
//       },
//       {
//         title: "Technology",
//         description:
//           "Suspendisse potenti. Proin consectetur malesuada risus, sit amet auctor sapien rhoncus at. Ut ac lorem a elit condimentum auctor. Curabitur sed dolor ante. Vivamus dignissim, magna ut fermentum tristique, libero justo rhoncus mauris, nec tempus odio tortor et velit.",
//         author: "John Doe",
//         authorId: "jhasaitysdatd"
//       }
//     ];

//     await Post.insertMany(dummyPosts);
//   }
// };



const getAllPosts = async (req, res) => {
  // await insertDummyData();
  try {
    const posts = await Post.find();
    res.json({
      data: posts.map(val => ({
        ...val._doc,
        description: val.description.length > 30 ? val.description.slice(0, 30) + "..." : val.description
      })),
      success: true,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      error: error.message,
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.json({
        data: post,
        success: true,
        error: null,
      });
    } else {
      res.status(404).json({
        data: null,
        success: false,
        error: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      error: error.message,
    });
  }
};

const createPost = async (req, res) => {
  const { title, description, author } = req.body;

  try {
    const newPost = new Post({
      title,
      description,
      author,
    });
    const post = await newPost.save();
    res.status(201).json({
      data: post,
      success: true,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      error: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (post) {
      res.json({
        data: post,
        success: true,
        error: null,
        message: "Post Successfully Updated."
      });
    } else {
      res.status(404).json({
        data: null,
        success: false,
        error: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      error: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (post) {
      res.json({
        data: post,
        success: true,
        error: null,
        message: "Post Successfully deleted."
      });
    } else {
      res.status(404).json({
        data: null,
        success: false,
        error: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
