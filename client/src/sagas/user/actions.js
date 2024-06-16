import { LOGIN_USER, REGISTER_USER } from "./types";

export const fetchPost = (payload) => ({
    type:LOGIN_USER,
    payload:payload
})

export const updatePost = (payload) => ({
    type:REGISTER_USER,
    payload:payload
})
