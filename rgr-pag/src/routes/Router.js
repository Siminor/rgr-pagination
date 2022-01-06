import * as React from "react"
import { Switch, Route } from "react-router-dom"
import LoginPage from "../pages/login-page"
import HomePage from "../pages/home-page"
import { loginUser } from "../store/actions"
import { useSelector, useDispatch } from "react-redux"

const SiteRouter = ({ value }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  React.useEffect(() => {
    const localData = localStorage.getItem("user")
    localData !== "null" && dispatch(loginUser(JSON.parse(localData)))
    setInterval(() => (document.title = document.title === "react-rgr" ? value : "react-rgr"), 1000)
  }, [])
  return user ? (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
    </Switch>
  )
}

export default SiteRouter
