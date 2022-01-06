import * as React from "react"
import SiteRouter from "./routes/Router"
import Layout from "./components/Layout"

const App = ({ value }) => {
  return (
    <Layout>
      <SiteRouter value={value} />
    </Layout>
  )
}

export default App
