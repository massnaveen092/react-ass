import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin: 70px;
  }
`

export const NoSavedVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoSavedVideoVIew = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`

export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const SavedVideoTitle = styled.li`
  display: flex;
  align-items: center;
`

export const SavedTitleConatiner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin: 40px;
  }
`
