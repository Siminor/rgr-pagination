import styled from "@emotion/styled"

const Divider = styled.span`
  width: 100%;
  height: 2px;
  margin: 5px 0;
  display: block;
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export default Divider
