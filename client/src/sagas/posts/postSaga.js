import { call, put, takeLatest,takeEvery } from "redux-saga/effects";
import { POSTS_CREATE, POSTS_CREATE_ERROR, POSTS_CREATE_START, POSTS_CREATE_SUCCESS, POSTS_FETCH, POSTS_FETCH_ERROR, POSTS_FETCH_START, POSTS_FETCH_SUCCESS, POST_DELETE, POST_DELETE_ERROR, POST_DELETE_START, POST_DELETE_SUCCESS, POST_FETCH, POST_FETCH_ERROR, POST_FETCH_START, POST_FETCH_SUCCESS, POST_UPDATE, POST_UPDATE_ERROR, POST_UPDATE_START, POST_UPDATE_SUCCESS } from "./types";
import { ApiCall } from "../../utils/axiosApiCallWrapper";

function* fetchPosts() {
    try {
        yield put({ type: POSTS_FETCH_START })
        const posts = yield call(
            ApiCall,
            "GET",
            'posts'
        )
        if(posts.success){
            yield put({ type: POSTS_FETCH_SUCCESS, posts: posts?.data })
        }
    } catch (e) {
        yield put({ type: POSTS_FETCH_ERROR, message: e?.message || "Error while fetching posts" })
    }
}

function* fetchPost(action) {

    try {
        yield put({ type: POST_FETCH_START })
        const post = yield call(
            ApiCall,
            "GET",
            `posts/${action.payload.postId}`
        )
        if(post.success){
            yield put({ type: POST_FETCH_SUCCESS, post: post?.data })
        }
    } catch (e) {
        yield put({ type: POST_FETCH_ERROR, message: e?.message || "Error while fetching posts" })
    }
}

function* updatePost(action) {

    try {
        yield put({ type: POST_UPDATE_START })
        const post = yield call(
            ApiCall,
            "PUT",
            `posts/${action.payload.postId}`,
            action.payload
        )
        if(post.success){
            yield put({ type: POST_UPDATE_SUCCESS, post: post?.data })
        }
    } catch (e) {
        yield put({ type: POST_UPDATE_ERROR, message: e?.message || "Error while updating post" })
    }
}
function* deletePost(action) {

    try {
        yield put({ type: POST_DELETE_START })
        const post = yield call(
            ApiCall,
            "DELETE",
            `posts/${action.payload.postId}`
        )
        if(post.success){
            yield put({ type: POST_DELETE_SUCCESS, id: post?.data._id })
        }
    } catch (e) {
        yield put({ type: POST_DELETE_ERROR, message: e?.message || "Error while deleting post" })
    }
}

function* createPost(action) {
    try {
        yield put({ type: POSTS_CREATE_START })
        const post = yield call(
            ApiCall,
            "POST",
            `posts`,
            action.payload
        )
        if(post.success){
            yield put({ type: POSTS_CREATE_SUCCESS, post: post?.data })
        }
    } catch (e) {
        yield put({ type: POSTS_CREATE_ERROR, message: e?.message || "Error while creating post" })
    }
}



function* postsSaga() {
    yield takeLatest(POSTS_FETCH, fetchPosts)
    yield takeLatest(POST_FETCH, fetchPost)
    yield takeLatest(POST_UPDATE, updatePost)
    yield takeLatest(POST_DELETE, deletePost)
    yield takeEvery(POSTS_CREATE, createPost)
}


export default postsSaga