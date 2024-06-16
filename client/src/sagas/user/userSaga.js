import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_START, LOGIN_USER_SUCCESS, REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_START, REGISTER_USER_SUCCESS } from "./types";
import { ApiCall } from "../../utils/axiosApiCallWrapper";



function* loginUser(action) {

    console.log("==Payload Login==>", action);

    try {
        yield put({ type: LOGIN_USER_START })
        const login = yield call(
            ApiCall,
            "POST",
            'auth/login',
            action.payload
        )

        console.log("====Login===>", login);
        if(login.success){
            localStorage.setItem('token', login.token)
            yield put({ type: LOGIN_USER_SUCCESS, token: login?.token, user: login?.user })
        }
    } catch (e) {
        yield put({ type: LOGIN_USER_ERROR, message: e?.message || "Error while logging in." })
    }

}


function* registerUser(action) {
    console.log("==Payload Register==>", action);

    try {
        yield put({ type: REGISTER_USER_START })
        const register = yield call(
            ApiCall,
            "POST",
            'auth/register',
            action.payload
        )
        if(register.success){
            localStorage.setItem('token', register.token)
            yield put({ type: REGISTER_USER_SUCCESS, token: register?.token, user : register?.user })
        }
    } catch (e) {
        yield put({ type: REGISTER_USER_ERROR, message: e?.message || "Error while registering user." })
    }
}


function* userSaga() {
    yield takeLatest(LOGIN_USER, loginUser)
    yield takeLatest(REGISTER_USER, registerUser)
}

export default userSaga