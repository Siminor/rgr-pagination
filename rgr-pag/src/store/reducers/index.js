import updateAccount from "./account"
import updateUsers from "./users"

const reducer = (state, action) => {
  console.log(action.type)
  return {
    user: updateAccount(state, action),
    usersList: updateUsers(state, action),
  }
}

export default reducer
