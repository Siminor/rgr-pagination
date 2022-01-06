import styled from "@emotion/styled"

const MainPageContent = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("2xl")} {
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.up("2xl")} {
    width: 60%;
  }
`

export default MainPageContent
