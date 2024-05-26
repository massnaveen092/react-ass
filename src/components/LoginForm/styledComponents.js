import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  min-height: 100vh;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
  flex-direction: row;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const Loginbutton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  margin-top: 20px;
`
