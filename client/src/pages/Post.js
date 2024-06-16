import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../sagas/posts/actions";
import { formatDate } from "../utils/date";

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {currentPost, fetching} = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(
      fetchPost({
        postId: id,
      })
    );
  }, []);


  return (
    <>
      <Header />
      <div className="tw-container tw-mx-auto tw-px-4 tw-pt-8">
        <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6">
          <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4">
            {currentPost?.title}
          </h1>
          <p className="tw-text-gray-600 tw-mb-4 tw-font-bold">Author: {currentPost?.author}</p>
          <div className="tw-text-gray-700 tw-mb-4"  style={{ whiteSpace: "pre-line", minHeight: "240px" }}>{currentPost?.description}</div>
          <div className="tw-border-t tw-border-gray-300 tw-mt-4 tw-pt-4">
            <p className="tw-text-gray-600">Created At: {formatDate(currentPost?.createdAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
