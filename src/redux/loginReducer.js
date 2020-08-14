import { LOGIN_USER, LOGOUT_USER } from "./types"

const initState = false

export const isLoggedIn = (state = initState, { type }) => {
  switch(type) {
    case LOGIN_USER:
      return true
    case LOGOUT_USER:
      return false
    default: 
      return state
  }
}