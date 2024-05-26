import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LoginLink = styled(Link)`
  text-decoration: none;
`

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`

export const LogoutBbutton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  padding: 5px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProgileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
  }
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  border: 1px solid grey;
  padding: 8px;
  color: white;
  margin: 10px;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
  }
`
