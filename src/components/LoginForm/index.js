import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  Loginbutton,
  SubmitError,
  InputLabel,
  UserInput,
  CheckBoxContainer,
  CheckBox,
  ShowPassword,
} from './styledComponents'

class LoginFrom extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errormsg: '',
  }

  onChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onShowPassword = () => {
    this.setState(prevstate => ({showPassword: !prevstate.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errormsg => {
    this.setState({showSubmitError: true, errormsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.errormsg)
    }
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="password"
        />
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckBoxContainer>
      </>
    )
  }

  render() {
    const {showSubmitError, errormsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUserNameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <Loginbutton type="submit">Login</Loginbutton>
          {showSubmitError && <SubmitError>*{errormsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default LoginFrom
