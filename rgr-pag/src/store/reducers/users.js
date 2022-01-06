import initialState from "../initialState"

import { USERS_ADD, USERS_REMOVE } from "../actionTypes"

const updateUsers = (state, action) => {
  if (state === undefined) {
    return initialState.usersList
  }

  switch (action.type) {
    case USERS_ADD:
      return [...state.usersList, action.payload]

    case USERS_REMOVE:
      return state.usersList.filter(({ idx }) => idx !== action.payload)

    default:
      return state.usersList
  }
}

export default updateUsers
