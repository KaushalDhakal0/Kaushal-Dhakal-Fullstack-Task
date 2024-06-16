import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_START, LOGIN_USER_SUCCESS, REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_START, REGISTER_USER_SUCCESS } from "./types";



function* loginUser() {}
function* registerUser() {}


function* userSaga() {
    yield takeLatest(LOGIN_USER, loginUser)
    yield takeLatest(REGISTER_USER, registerUser)
}

export default userSaga