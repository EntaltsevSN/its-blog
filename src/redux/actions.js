import { ADD_POST, TOGGLE_POST, EDIT_POST, REMOVE_POST, LOGOUT_USER, LOGIN_USER, AUTHORIZE_USER, UNAUTHORIZE_USER } from "./types";

export const addPost = data => ({ type: ADD_POST, data })
export const togglePost = data => ({ type: TOGGLE_POST, data })
export const editPost = data => ({ type: EDIT_POST, data })
export const removePost = data => ({ type: REMOVE_POST, data })

export const authorizeUser = data => ({ type: AUTHORIZE_USER, data })
export const unAuthorizeUser = data => ({ type: UNAUTHORIZE_USER, data })

export const logoutUser = () => ({ type: LOGOUT_USER })
export const loginUser = () => ({ type: LOGIN_USER })

