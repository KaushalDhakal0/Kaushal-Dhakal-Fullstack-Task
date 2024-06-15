import { POSTS_FETCH, POST_UPDATE, POST_DELETE, POST_FETCH } from "./types";

export const fetchPosts = () => ({
    type:POSTS_FETCH,
})

export const fetchPost = (payload) => ({
    type:POST_FETCH,
    payload:payload
})

export const updatePosts = () => ({
    type:POST_UPDATE,
})

export const deletePosts = () => ({
    type:POST_DELETE,
})
