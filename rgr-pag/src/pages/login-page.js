import * as React from "react"
import Button from "../components/Button"
import InputField from "../components/InputField"
import Users from "../data/users"
import { loginUser } from "../store/actions"
import { useDispatch } from "react-redux"
import LoginFormWrapper from "../components/LoginPage/LoginFormWrapper"

const LoginPage = () => {
  const [formState, setFormState] = React.useState({})
  const dispatch = useDispatch()
  const setLoggedHandler = () => {
    if (
      Object.keys(formState).length === 0 ||
      formState.username === "" ||
      formState.password === ""
    ) {
      return alert("Please enter your username and password")
    }
    const user = Users.find(({ username, password }) => {
      if (username === formState.username && password === formState.password) {
        return true
      }
    })

    if (user) {
      setFormState({})
      dispatch(loginUser(formState))
    } else {
      return alert("Please enter valid username and password")
    }
  }

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <LoginFormWrapper>
      <h1>Login to website</h1>
      <InputField
        label="Username"
        changeHandler={changeHandler}
        name="username"
        value={formState.username}
      />
      <InputField
        label="Password"
        changeHandler={changeHandler}
        name="password"
        value={formState.password}
      />
      <Button onClick={setLoggedHandler} type="button">
        Log in
      </Button>
    </LoginFormWrapper>
  )
}

export default LoginPage
