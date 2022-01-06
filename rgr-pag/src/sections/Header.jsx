import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../store/actions"
import HeaderWrapper from "../components/Header/HeaderWrapper"
import HeaderContent from "../components/Header/HeaderContent"
import Container from "../components/Container"

const Header = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          Header
          {user && (
            <div>
              <div>{user.username}</div>
              <div>{user.password}</div>
              <div onClick={() => dispatch(logoutUser())}>Logout</div>
            </div>
          )}
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
