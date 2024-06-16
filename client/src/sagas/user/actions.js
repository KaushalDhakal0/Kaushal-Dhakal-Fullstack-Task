import { LOGIN_USER, REGISTER_USER } from "./types";

export const loginUser = (payload) => ({
    type:LOGIN_USER,
    payload:payload
})

export const registerUser = (payload) => ({
    type:REGISTER_USER,
    payload:payload
})
