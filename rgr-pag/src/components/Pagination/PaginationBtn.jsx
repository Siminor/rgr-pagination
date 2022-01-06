import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ theme, variant, dir }) => css`
  ${variant === "arrow"
    ? `
    position: relative;

    &:before{
        content: "";
        width:15px;
        height:2px;
        background-color: ${theme.palette.common.black};
        position: absolute;
    }

    &:after{
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        border: 2px solid ${theme.palette.common.black};
        border-left: none !important;
        border-top: none !important;
        ${
          dir === "right"
            ? `
        transform: rotate(-45deg);
        right: 14px;
        `
            : `
        transform: rotate(135deg);
        left: 14px;
        `
        }
    }

    &:hover {
        &:before{
            background-color: ${theme.palette.common.white};
        }
        
        &:after {
            border-color: ${theme.palette.common.white}
        }
    }
`
    : ``}
`

const PaginationBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.gray[300]};
  transition: 0.3s;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.common.white};
  }

  ${dynamicStyle}
`

export default PaginationBtn
