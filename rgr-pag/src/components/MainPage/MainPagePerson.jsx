import styled from "@emotion/styled"

const MainPagePerson = styled.div`
  display: flex;
  transition: 0.5s;
  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
  }

  &:nth-last-child(2) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

  &:not(:first-child) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.gray[100]};
    }
  }
`

export default MainPagePerson
