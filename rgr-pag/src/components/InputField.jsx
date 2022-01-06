import styled from "@emotion/styled"

const Component = styled.div`
  display: flex;
  flex: 0 1 47%;
  height: 45px;
  position: relative;

  & > input {
    width: 100%;
    height: 100%;
    padding: 10px 10px;
    display: block;
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    &:focus {
      &::placeholder {
        color: transparent;
      }
      & + label {
        display: block;
      }
    }
  }

  & > label {
    position: absolute;
    left: 10px;
    transform: translateY(-50%);
    display: block;
    background-color: ${({ theme }) => theme.palette.common.white};
    display: none;
  }
`

const InputField = ({
  type = "text",
  label = "field",
  name = "field",
  changeHandler = () => {},
  value = "",
}) => {
  return (
    <Component>
      <input type={type} placeholder={label} name={name} onChange={changeHandler} value={value} />
      <label>{label}</label>
    </Component>
  )
}

export default InputField
