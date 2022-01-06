import styled from "@emotion/styled"

const HeaderWrapper = styled.header`
  min-height: 90px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.palette.gray[100]};
`

export default HeaderWrapper
