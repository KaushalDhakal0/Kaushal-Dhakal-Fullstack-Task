import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { fetchPosts } from "../sagas/posts/actions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
 

  const {data , fetching, error, deleting, updating} = useSelector(state => state.posts);
  // console.log("===XXXXX===>", postsX);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  },[])

  useEffect(()=>{
    console.log("====Fetching==>", data);
  },[fetching])

  return (
   <>
   <Header />
    <div className="tw-container tw-mx-auto tw-px-4">
      <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mt-8 tw-mb-4">
        Blog Posts
      </h1>
      {data?.map((post, index) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div
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
