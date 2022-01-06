import initialState from "../initialState"

import { USER_LOGIN, USER_LOGOUT } from "../actionTypes"

const updateAccount = (state, action) => {
  if (state === undefined) {
    return initialState.user
  }

  switch (action.type) {
    case USER_LOGIN:
      console.log(action.payload)
      localStorage.setItem("user", JSON.stringify(action.payload))
      return action.payload

    case USER_LOGOUT:
      localStorage.removeItem("user")
      return null

    default:
      return state.user
  }
}

export default updateAccount
