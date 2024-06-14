import React from "react";
import Header from "../components/Header";
const post = {
  id: "akshdga",
  title: "Finance",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel enim posuere congue. Vestibulum pharetra erat quis leo ultrices, at varius justo ultricies. Sed sit amet varius ligula. Aenean placerat ex at mi bibendum, nec consectetur turpis efficitur. Duis nec fermentum sem. Morbi non ex aliquam, vestibulum nunc in, lacinia purus. Proin laoreet ex sit amet enim efficitur egestas. Sed eget enim vitae felis vehicula dignissim. Nullam vitae nunc nec purus ultrices elementum. Nam ullamcorper arcu non erat accumsan, sit amet feugiat urna condimentum. Phasellus efficitur augue sit amet ante placerat, id auctor felis accumsan. Cras auctor, erat nec tincidunt mollis, tortor magna pretium mi, nec vestibulum lorem nunc vel nisl. Donec fringilla tortor non orci tristique, nec aliquam arcu lobortis. Mauris varius purus sit amet tellus eleifend, a aliquet justo iaculis. Nulla et ligula id sem finibus lobortis. Proin ullamcorper orci at tincidunt vestibulum. Proin vel nisi sed felis iaculis laoreet. Duis non pharetra justo. Sed viverra mi nec justo vulputate, sed egestas turpis elementum.",
  author: "Kaushal Dhakal",
  createdAt: "Jan 2023",
};
const Post = () => {
  return (
    <>
      <Header />
      <div className="tw-container tw-mx-auto tw-px-4 tw-pt-8">
        <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6">
          <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4">
            {post.title}
          </h1>
          <p className="tw-text-gray-600 tw-mb-4">Author: {post.author}</p>
          <p className="tw-text-gray-700 tw-mb-4">{post.description}</p>
          <div className="tw-border-t tw-border-gray-300 tw-mt-4 tw-pt-4">
            <p className="tw-text-gray-600">Created At: {post.createdAt}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
