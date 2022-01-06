import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ theme, active }) => css`
  ${active &&
  `
        background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
        `}
`

const PaginationItem = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.gray[300]};
  transition: 0.3s;
  border-radius: 10px;
  border: none;

  ${dynamicStyle}

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.common.white};
  }
`

export default PaginationItem
