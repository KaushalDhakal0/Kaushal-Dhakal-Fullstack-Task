import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import toast from "react-hot-toast";
import { deletePost, fetchPosts } from "../sagas/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Delete from "./common/Delete";

const HomePage = () => {
 const [currentPost, setCurrentPost] = useState(null);
 const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const {data , fetching, error, deleting, updating, deleteSuccess, updateSuccess} = useSelector(state => state.posts);
  // console.log("===XXXXX===>", postsX);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  },[])



  useEffect(()=>{
    if(error){
      toast.error(error)
    }
    if(!error && deleteSuccess && currentPost){
      setShowDeleteConfirmation(false)
      toast.success("Post deleted Successfully")
    }
    if(!error && updateSuccess){
      toast.success("Post updated Successfully")
    }
  },[deleteSuccess,deleting, updateSuccess,currentPost,error])

  const handleDeleteClick = (id) => {
    setShowDeleteConfirmation(true);
    setCurrentPost(id)
  }

  const handleDeleteCanceled = () => {
    setShowDeleteConfirmation(false)
    setCurrentPost(null)
  }

  const handleDeleteConfirmed = () => {
    // console.log("===DeleteID===>",id);
    dispatch(deletePost({
      postId:currentPost
    }))
  }

  return (
   <>
   <Header />
    <div className="tw-container tw-mx-auto tw-px-4">
      <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mt-8 tw-mb-4">
        Blog Posts
      </h1>
      {data?.map((post, index) => (
        <Link to={`/post/${post?.id}`} key={post?.id}>
          <div
            className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6 tw-mb-4 tw-cursor-pointer hover:tw-shadow-2xl"
          >
            <div className="tw-flex tw-justify-between">
            <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800">
              {post?.title}
            </h2>
            <div className="tw-flex tw-gap-2">
                <div className="hover:tw-underline">Edit</div>
                <div className="hover:tw-underline" onClick={e => {
                  e.preventDefault()
                  // e.stopPropagation()
                  handleDeleteClick(post?.id)
                }}>Delete</div>
            </div>
            </div>
            <p className="tw-text-gray-600 tw-mt-2">{post?.description}</p>
            <div className="tw-flex tw-items-center tw-mt-4">
              <span className="tw-text-gray-700">Author: {post?.author}</span>
              <span className="tw-text-gray-700 tw-ml-4">
                Created At: {post?.createdAt}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
    {showDeleteConfirmation && (
       <Modal>
           <Delete handleDeleteCanceled={handleDeleteCanceled} handleDeleteConfirmed={handleDeleteConfirmed} deleting={deleting} type="Post" />
       </Modal>
      )}
      
   </>
  );
};
// to={`/post/${post.id}`}

export default HomePage;
