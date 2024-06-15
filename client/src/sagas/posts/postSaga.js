import { call, put, takeLatest } from "redux-saga/effects";
import { POSTS_FETCH, POSTS_FETCH_ERROR, POSTS_FETCH_START, POSTS_FETCH_SUCCESS, POST_FETCH, POST_FETCH_ERROR, POST_FETCH_START, POST_FETCH_SUCCESS } from "./types";
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

    console.log("===Fetching Single Poist==>", action);
    try {
        yield put({ type: POST_FETCH_START })
        const post = yield call(
            ApiCall,
            "GET",
            `post/${action.payload.postId}`
        )
        if(post.success){
            yield put({ type: POST_FETCH_SUCCESS, post: post?.data })
        }
    } catch (e) {
        yield put({ type: POST_FETCH_ERROR, message: e?.message || "Error while fetching posts" })
    }
}


function* postsSaga() {
    yield takeLatest(POSTS_FETCH, fetchPosts)
    yield takeLatest(POST_FETCH, fetchPost)
}


export default postsSaga