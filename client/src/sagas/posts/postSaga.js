import { call, put, takeLatest } from "redux-saga/effects";
import { POSTS_FETCH, POSTS_FETCH_ERROR, POSTS_FETCH_START, POSTS_FETCH_SUCCESS } from "./types";

function* fetchPosts() {
    try {
        yield put({ type: POSTS_FETCH_START })
        const posts = yield call(

        )

        if(posts.success){
            yield put({ type: POSTS_FETCH_SUCCESS, posts: posts?.data })
        }
    } catch (e) {
        yield put({ type: POSTS_FETCH_ERROR, message: e?.message || "Error while fetching posts" })
    }
}


function* postsSaga() {
    yield takeLatest(POSTS_FETCH, fetchPosts)
}


export default postsSaga