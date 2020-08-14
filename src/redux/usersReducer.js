import { AUTHORIZE_USER, UNAUTHORIZE_USER } from "./types"

const initState = [
  {
    id: 1,
    login: 'Stan',
    password: 'itsStanPass01',
    role: 'user',
    authorized: false
  },
  {
    id: 2,
    login: 'Alex',
    password: 'itsAlexPass01',
    role: 'admin',
    authorized: false
  }
]

export const users = (state = initState, { type, data }) => {
  switch(type) {
    case AUTHORIZE_USER:
      return [...state.map(user => user.id === data ? {...user, authorized: !user.authorized } : user)]
    case UNAUTHORIZE_USER:
        return [...state.map(user => ({...user, authorized: false }))]
    default:
      return state
  }
}