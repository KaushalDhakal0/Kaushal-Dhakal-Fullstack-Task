const Post = require("../models/Post")
const posts = [
    {
      id: "Jygusadg73246",
      title: "Redux Saga",
      description: "We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.",
      author: "Kaushal Dhakal",
      createdAt: "Jan 2023",
      authorId: "jhasdyadf"
    },
    {
      id: "jhfegn7562330",
      title: "Technology",
      description: "We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free.We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free We saw that the watch-and-fork pattern allows handling multiple requests simultaneously, without limit on the number of worker tasks executing concurrently. Then, we used the actionChannel effect to limit the concurrency to one task at a time.So lets say that our requirement is to have a maximum of three tasks executing at the same time. When we get a request and there are less than three tasks executing, we process the request immediately, otherwise we queue the task and wait for one of the three slots to become free..",
      author: "John Doe",
      createdAt: "Feb 2023",
      authorId: "jhasaitysdatd"
    },
    // Add more posts as needed
  ];
  
  const getAllPosts =async (req, res) => {
    console.log("=====Get All Posts===");
    // const postsX = await Post.find();
    // console.log("===All Posts ===>", postsX);
    res.json({
      data: posts.map(val => {


        return {
          ...val,
          description: val.description.length > 30 ? val.description.slice(0,30) + '...' : val.description
        }
      }),
      success: true,
      error: null,
    });
  };
  
  const getPostById = (req, res) => {
    console.log("=====Get single Post===",req.params.id);

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
  };
  
  const updatePost = (req, res) => {
    console.log("=====Update Post===",req.params.id);

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
        message:"Post Successfully Updated."
      });
    } else {
      res.status(404).json({
        data: null,
        success: false,
        error: "Post not found",
      });
    }
  };
  
  const deletePost = (req, res) => {
    console.log("=====Delete Post===",req.params.id);

    const index = posts.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
      const deletedPost = posts.splice(index, 1);
      res.json({
        data: deletedPost[0],
        success: true,
        error: null,
        message:"Post Successfully deleted."
      });
    } else {
      res.status(404).json({
        data: null,
        success: false,
        error: "Post not found",
      });
    }
  };
  
  module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
  