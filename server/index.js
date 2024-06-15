const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const posts = [
    {
      id: "akshdga",
      title: "Finance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel enim posuere congue. Vestibulum pharetra erat quis leo ultrices, at varius justo ultricies. Sed sit amet varius ligula.",
      author: "Kaushal Dhakal",
      createdAt: "Jan 2023",
    },
    {
      id: "akshdgdasda",
      title: "Technology",
      description:
        "Suspendisse potenti. Proin consectetur malesuada risus, sit amet auctor sapien rhoncus at. Ut ac lorem a elit condimentum auctor. Curabitur sed dolor ante. Vivamus dignissim, magna ut fermentum tristique, libero justo rhoncus mauris, nec tempus odio tortor et velit.",
      author: "John Doe",
      createdAt: "Feb 2023",
    },
    // Add more posts as needed
  ]

const app = express();
const port = process.env.PORT || 8000;

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
  res.json({
    data:posts ,
    success: true,
    error: null,
  });
});

app.get("/post/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
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
  });


  app.put("/posts/:id", (req, res) => {
    const index = posts.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
      posts[index] = {
        ...posts[index],
        ...req.body,
      };
      res.json({
        data: posts[index],
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
  });

  app.delete("/posts/:id", (req, res) => {
    const index = posts.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
      const deletedPost = posts.splice(index, 1);
      res.json({
        data: deletedPost,
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
  });
  

app.listen(port, () => console.log(`Server running on port ${port}`));
