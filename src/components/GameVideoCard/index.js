import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbnailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewAndDate,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textcolor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`}>
            <GamingListItem>
              <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textcolor}>{title}</GamingTitle>
                <GamingViewAndDate color={textcolor}>
                  {viewCount} Watching Worldwide
                </GamingViewAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GameVideoCard
