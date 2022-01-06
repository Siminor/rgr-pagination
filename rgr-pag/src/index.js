import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import { c } from "./store/actionTypes"
import App from "./App"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App value={c} />
    </Provider>
  </Router>,
  document.getElementById("root"),
)
