import styled from "@emotion/styled"

const LoginFormWrapper = styled.section`
  text-align: center;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  margin: 0 auto;
  align-items: center;
  padding: 25px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.palette.gray[100]};

  & > * {
    width: 100%;
  }
`

export default LoginFormWrapper
