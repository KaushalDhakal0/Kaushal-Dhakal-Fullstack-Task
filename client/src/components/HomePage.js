import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import toast from "react-hot-toast";
import {
  clearStatus,
  createPost,
  deletePost,
  fetchPosts,
  updatePost,
} from "../sagas/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Delete from "./common/Delete";
import CreateBlog from "./CreateBlog";
import UpdateBlog from "./UpdateBlog";
import { formatDate } from "../utils/date";
import Button from "./common/Button";

const HomePage = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);

  const {
    data,
    fetching,
    error,
    deleting,
    updating,
    deleteSuccess,
    updateSuccess,
    creating,
    createSuccess,
  } = useSelector((state) => state.posts);

  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdateBlog = (formData) => {
    dispatch(updatePost(formData));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [token]);

  useEffect(() => {
    if (!creating && createSuccess) {
      toast.success("Post created Successfully.");
      setCreateMode(false);
    }
  }, [creating, createSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (!error && deleteSuccess && currentPost) {
      setShowDeleteConfirmation(false);
      toast.success("Post deleted Successfully");
    }
    if (!updating && updateSuccess) {
      toast.success("Post updated Successfully");
      setUpdateMode(false)
    }
    
    //cleanup for clearing status
    return () =>{
      dispatch(clearStatus())
    }
  }, [deleteSuccess, deleting, updateSuccess, currentPost, error, updating]);

  const handleDeleteClick = (id) => {
    setShowDeleteConfirmation(true);
    setCurrentPost(id);
  };

  const handleDeleteCanceled = () => {
    setShowDeleteConfirmation(false);
    setCurrentPost(null);
  };

  const handleDeleteConfirmed = () => {
    // console.log("===DeleteID===>",id);
    dispatch(
      deletePost({
        postId: currentPost,
      })
    );
  };

  const handleCreateBlog = (formData) => {
    dispatch(createPost(formData));
  };

  return (
    <>
      <Header />
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-flex tw-justify-between">
          <div>
            <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mt-8 tw-mb-4">
              Blog Posts
            </h1>
          </div>
          {/* <div
            onClick={() => setCreateMode(true)}
            className="tw-text-2xl tw-font-bold tw-text-gray-800 tw-mt-8 tw-mb-4 tw-border-4 tw-cursor-pointer tw-rounded-md tw-p-2 hover:tw-bg-gray-400"
          >
            Create Blog +
          </div> */}
          <Button
            className="tw-bg-gray-300 tw-h-10 tw-mt-5"
            disabled={false}
            loading={false}
            onClick={()=> setCreateMode(true)}
            title="Create Blog +"
          
          />
        </div>
        {data?.length < 1 && <div className="tw-mt-8"><h2 className="tw-text-center tw-text-xl">Empty blogs. Please <span className="hover:tw-underline tw-cursor-pointer"  onClick={() => setCreateMode(true)}>Create New</span>!!!</h2></div>}
        {data?.map((post) => (
          <Link to={`/post/${post?._id}`} key={post?._id}>
            <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6 tw-mb-4 tw-cursor-pointer hover:tw-shadow-2xl">
              <div className="tw-flex tw-justify-between">
                <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                  {post?.title}
                </h2>
                <div className="tw-flex tw-gap-2">
                  <div
                    className="hover:tw-underline"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPost(post?._id);
                      setUpdateMode(true);
                    }}
                  >
                    Edit
                  </div>
                  <div
                    className="hover:tw-underline"
                    onClick={(e) => {
                      e.preventDefault();
                      // e.stopPropagation()
                      handleDeleteClick(post?._id);
                    }}
                  >
                    Delete
                  </div>
                </div>
              </div>
              <p className="tw-text-gray-600 tw-mt-2">{post?.description?.slice(0,20) + '.........................'+ "   " + 'Read More'}</p>
              <div className="tw-flex tw-items-center tw-mt-4">
                <span className="tw-text-gray-700">Author: {post?.author}</span>
                <span className="tw-text-gray-700 tw-ml-4">
                  Created At: {formatDate(post?.createdAt)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {showDeleteConfirmation && (
        <Modal>
          <Delete
            handleDeleteCanceled={handleDeleteCanceled}
            handleDeleteConfirmed={handleDeleteConfirmed}
            deleting={deleting}
            type="Post"
          />
        </Modal>
      )}
      {createMode && (
        <Modal>
          <CreateBlog
            handleCreatePost={handleCreateBlog}
            setCreateMode={setCreateMode}
          />
        </Modal>
      )}
      {updateMode && (
        <Modal>
          <UpdateBlog
            handleUpdateBlog={handleUpdateBlog}
            setUpdateMode={setUpdateMode}
            currentPost={currentPost}
          />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
