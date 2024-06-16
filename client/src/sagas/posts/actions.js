import { POSTS_FETCH, POST_UPDATE, POST_DELETE, POST_FETCH, POSTS_CREATE, CLEAR_STATUS } from "./types";

export const fetchPosts = () => ({
    type:POSTS_FETCH,
})

export const fetchPost = (payload) => ({
    type:POST_FETCH,
    payload:payload
})

export const updatePost = (payload) => ({
    type:POST_UPDATE,
    payload:payload
})

export const deletePost = (payload) => ({
    type:POST_DELETE,
    payload:payload
})

export const createPost = (payload) =>({
    type: POSTS_CREATE,
    payload: payload
})

export const clearStatus = () =>({
    type: CLEAR_STATUS,
})
