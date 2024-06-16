import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "./sagas/posts/reducers";
import { userReducer } from "./sagas/user/reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
})

export default rootReducer