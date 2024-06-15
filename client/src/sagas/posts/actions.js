import { POSTS_FETCH, POST_UPDATE, POST_DELETE } from "./types";

export const fetchPosts = () => ({
    type:POSTS_FETCH,
})

export const updatePosts = () => ({
    type:POST_UPDATE,
})

export const deletePosts = () => ({
    type:POST_DELETE,
})
