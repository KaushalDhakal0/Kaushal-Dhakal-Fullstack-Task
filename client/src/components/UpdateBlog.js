import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../sagas/posts/actions";

const UpdateBlog = ({ handleUpdateBlog, setUpdateMode, currentPost }) => {
  const dispatch = useDispatch();
  const { currentPost: postDetails, fetching } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(
      fetchPost({
        postId: currentPost,
      })
    );
  }, []);
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    postId: "",
  });

  useEffect(() => {
    if (postDetails?.title) {
      setFormData({
        author: postDetails.author,
        title: postDetails.title,
        description: postDetails.description,
        postId: currentPost,
      });
    }
  }, [postDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateBlog(formData);
    setFormData({
      author: "",
      title: "",
      description: "",
    });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setUpdateMode(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setUpdateMode]);

  return (
    <div className=" tw-w-[300px] md:tw-w-[600px] lg:tw-w-[800px]">
      <div
        className="tw-flex tw-flex-col tw-items-end tw-p-3 tw-cursor-pointer"
        onClick={() => setUpdateMode(false)}
      >
        <div><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="tw-size-6 tw-text-end"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg></div>
       <div> <h3 className="tw-text-gray-500">Esc</h3></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6 tw-mb-4"
      >
        <div className="tw-mb-4">
          <label
            className="tw-block tw-text-gray-700 tw-text-md tw-font-bold tw-mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
            id="name"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="tw-mb-4">
          <label
            className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2 tw-text-md"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="tw-mb-6">
          <label
            className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2 tw-text-md"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
            id="description"
            name="description"
            rows={10}
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="tw-flex tw-items-end tw-justify-end">
          <button
            className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded focus:tw-outline-none  tw-text-md"
            type="submit"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
