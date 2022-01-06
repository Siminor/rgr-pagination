import styled from "@emotion/styled"

const RemoveButton = styled.button`
  max-width: 150px;
  padding: 10px 20px;
  position: relative;
  transition: 0.5s;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid crimson;

  &:hover {
    cursor: pointer;
    background-color: crimson;
    border: 1px solid transparent;
    color: white;
  }

  &:active {
    background-color: crimson;
  }
`

export default RemoveButton
