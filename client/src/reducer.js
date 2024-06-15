import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "./sagas/posts/reducers";

const rootReducer = combineReducers({
    posts: postsReducer
})

export default rootReducer