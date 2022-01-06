import * as React from "react"
import MainPageWrapper from "../components/MainPage/MainPageWrapper"
import MainPageContent from "../components/MainPage/MainPageContent"
import MainPageColumn from "../components/MainPage/MainPageColumn"
import MainPageFormWrapper from "../components/MainPage/MainPageFormWrapper"
import MainPagePerson from "../components/MainPage/MainPagePerson"
import MainPageForm from "../components/MainPage/MainPageForm"
import InputField from "../components/InputField"
import Button from "../components/Button"
import RemoveButton from "../components/MainPage/MainPageRemoveButton"
import { useSelector, useDispatch } from "react-redux"
import { addUser, removeUser } from "../store/actions"
import PaginationWrapper from "../components/Pagination/PaginationWrapper"
import PaginationStack from "../components/Pagination/PaginationStack"
import PaginationBtn from "../components/Pagination/PaginationBtn"
import PaginationItem from "../components/Pagination/PaginationItem"

const HomePage = () => {
  const [formData, setFormData] = React.useState({})
  const [currPage, setCurrPage] = React.useState(0)
  const users = useSelector((state) => state.usersList)
  const usersOnPage = 3
  const pageCount = Math.ceil(users.length / usersOnPage)
  const dispatch = useDispatch()
  const numOfButtons = []

  for (let i = 0; i < pageCount; i++) {
    numOfButtons.push(i)
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const addUserHandler = () => {
    if (formData.fName && formData.lName && formData.email && formData.role) {
      dispatch(addUser({ ...formData, idx: users.length + 1 }))
      setFormData({})
    } else {
      alert("Fill all fields")
    }
  }

  const prevButtonHandler = () => {
    currPage !== 0 && setCurrPage(currPage - 1)
  }

  const nextButtonHandler = () => {
    currPage !== pageCount && setCurrPage(currPage + 1)
  }

  const removeUserHandler = (idx) => {
    dispatch(removeUser(idx))
  }

  return (
    <>
      <MainPageWrapper>
        <MainPageContent>
          <MainPagePerson>
            <MainPageColumn>ID</MainPageColumn>
            <MainPageColumn>First Name</MainPageColumn>
            <MainPageColumn>Last Name</MainPageColumn>
            <MainPageColumn>Email</MainPageColumn>
            <MainPageColumn>Role </MainPageColumn>
            <MainPageColumn>Action </MainPageColumn>
          </MainPagePerson>
          {users &&
            users
              .slice(usersOnPage * currPage, usersOnPage * (currPage + 1))
              .map(({ idx, fName, lName, email, role }) => (
                <MainPagePerson>
                  <MainPageColumn>{idx}</MainPageColumn>
                  <MainPageColumn>{fName}</MainPageColumn>
                  <MainPageColumn>{lName}</MainPageColumn>
                  <MainPageColumn>{email}</MainPageColumn>
                  <MainPageColumn>{role}</MainPageColumn>
                  <MainPageColumn>
                    <RemoveButton onClick={() => removeUserHandler(idx)}>Delete</RemoveButton>
                  </MainPageColumn>
                </MainPagePerson>
              ))}

          <PaginationWrapper>
            {currPage !== 0 && pageCount !== 1 && (
              <PaginationBtn variant="arrow" dir="left" onClick={prevButtonHandler} />
            )}
            <PaginationStack>
              {numOfButtons.map((el) => (
                <PaginationItem key={el} active={el === currPage} onClick={() => setCurrPage(el)}>
                  {el + 1}
                </PaginationItem>
              ))}
            </PaginationStack>
            {currPage + 1 !== pageCount && pageCount !== 1 && (
              <PaginationBtn variant="arrow" dir="right" onClick={nextButtonHandler} />
            )}
          </PaginationWrapper>
        </MainPageContent>
        <MainPageFormWrapper>
          <MainPageForm>
            <InputField
              changeHandler={changeHandler}
              value={formData.fName}
              label="First Name"
              name="fName"
              type="text"
            />
            <InputField
              changeHandler={changeHandler}
              value={formData.lName}
              label="Last Name"
              name="lName"
              type="text"
            />
            <InputField
              changeHandler={changeHandler}
              value={formData.email}
              label="Email"
              name="email"
              type="text"
            />
            <InputField
              changeHandler={changeHandler}
              value={formData.role}
              name="role"
              label="Role"
              type="text"
            />
          </MainPageForm>
          <Button type="button" onClick={addUserHandler}>
            Add person
          </Button>
        </MainPageFormWrapper>
      </MainPageWrapper>
    </>
  )
}

export default HomePage
