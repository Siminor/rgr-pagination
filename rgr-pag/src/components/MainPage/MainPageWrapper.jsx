import styled from "@emotion/styled"

const MainPageWrapper = styled.section`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("2xl")} {
    flex-direction: column-reverse;
    row-gap: 30px;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    justify-content: space-between;
  }
`

export default MainPageWrapper
