import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const HomePage = () => {
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
      id: "akshdga",
      title: "Technology",
      description:
        "Suspendisse potenti. Proin consectetur malesuada risus, sit amet auctor sapien rhoncus at. Ut ac lorem a elit condimentum auctor. Curabitur sed dolor ante. Vivamus dignissim, magna ut fermentum tristique, libero justo rhoncus mauris, nec tempus odio tortor et velit.",
      author: "John Doe",
      createdAt: "Feb 2023",
    },
    // Add more posts as needed
  ];

  return (
   <>
   <Header />
    <div className="tw-container tw-mx-auto tw-px-4">
      <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mt-8 tw-mb-4">
        Blog Posts
      </h1>
      {posts.map((post, index) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div
            key={index}
            className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6 tw-mb-4 tw-cursor-pointer hover:tw-shadow-2xl"
          >
            <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800">
              {post.title}
            </h2>
            <p className="tw-text-gray-600 tw-mt-2">{post.description}</p>
            <div className="tw-flex tw-items-center tw-mt-4">
              <span className="tw-text-gray-700">Author: {post.author}</span>
              <span className="tw-text-gray-700 tw-ml-4">
                Created At: {post.createdAt}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
   </>
  );
};
// to={`/post/${post.id}`}

export default HomePage;
