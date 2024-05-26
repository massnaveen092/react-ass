import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedContainer,
  SavedTitleConatiner,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideoVIew,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideoNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedViedos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#12293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#1e293b'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedViedos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleConatiner>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleConatiner>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedViedos.length > 0 ? (
              <SavedVideoList>
                {savedViedos.map(each => (
                  <VideoCard key={each.id} videoDetails={each} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideoVIew>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading headingColor={headingColor}>
                  No saved Videos Found
                </NoSavedVideosHeading>
                <NoSavedVideoNote noteColor={noteColor}>
                  You Can Save your videos While watching them
                </NoSavedVideoNote>
              </NoSavedVideoVIew>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
