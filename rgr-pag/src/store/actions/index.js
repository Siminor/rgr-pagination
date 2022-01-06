import { USERS_ADD, USERS_REMOVE, USER_LOGIN, USER_LOGOUT } from "../actionTypes"

const addUser = (userData) => {
  return {
    type: USERS_ADD,
    payload: userData,
  }
}
const removeUser = (userId) => {
  return {
    type: USERS_REMOVE,
    payload: userId,
  }
}

const loginUser = (userData) => {
  return {
    type: USER_LOGIN,
    payload: userData,
  }
}
const logoutUser = () => {
  return {
    type: USER_LOGOUT,
  }
}

export { loginUser, logoutUser, addUser, removeUser }
