import styled from "@emotion/styled"

const MainPageFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 20px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.between("md", "2xl")} {
    width: 50%;
  }
  ${({ theme }) => theme.breakpoints.up("2xl")} {
    width: 35%;
  }
`

export default MainPageFormWrapper
