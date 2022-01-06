import styled from "@emotion/styled"

const Button = styled.button`
  max-width: 150px;
  padding: 12px 20px;
  position: relative;
  transition: 0.5s;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: 1px solid transparent;
    color: white;
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default Button
