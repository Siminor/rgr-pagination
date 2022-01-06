import { Global, ThemeProvider } from "@emotion/react"
import theme from "../theme"
import modernNormalize from "../styles/modernNormalize"
import Header from "../sections/Header"
import Body from "./Body"
import Container from "./Container"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={[modernNormalize]} />
    <Header />
    <Container>
      <Body>{children}</Body>
    </Container>
  </ThemeProvider>
)

export default Layout
