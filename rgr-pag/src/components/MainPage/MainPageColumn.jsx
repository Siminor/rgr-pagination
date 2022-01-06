import styled from "@emotion/styled"

const MainPageColumn = styled.div`
  display: flex;
  border-left: 1px solid ${({ theme }) => theme.palette.primary.main};
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("2xl")} {
    padding: 20px 10px;
    &:not(:first-child) {
      flex: 1 1 100%;
    }
    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.palette.primary.main};
      flex: 1 1 50%;
      justify-content: center;
    }
    &:first-child {
      flex: 1 1 20%;
      justify-content: center;
    }
  }

  ${({ theme }) => theme.breakpoints.between("2xl", "3xl")} {
    padding: 20px 10px;
    &:not(:first-child) {
      flex: 1 1 100%;
    }
    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.palette.primary.main};
      flex: 1 1 55%;
      justify-content: center;
    }
    &:first-child {
      flex: 1 1 20%;
      justify-content: center;
    }
  }

  ${({ theme }) => theme.breakpoints.up("3xl")} {
    padding: 20px 10px;
    &:not(:first-child) {
      flex: 1 1 100%;
    }
    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.palette.primary.main};
      flex: 1 1 50%;
      justify-content: center;
    }
    &:first-child {
      flex: 1 1 20%;
      justify-content: center;
    }
  }
`

export default MainPageColumn
