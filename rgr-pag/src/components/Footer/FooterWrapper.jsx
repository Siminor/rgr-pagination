import styled from "@emotion/styled"

const FooterWrapper = styled.footer`
  min-height: 90px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.palette.gray[100]};
`

export default FooterWrapper
