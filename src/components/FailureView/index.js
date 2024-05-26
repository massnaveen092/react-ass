import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e28f0' : '#475569'

        const failureViewImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailedImage src={failureViewImageUrl} alt="failure view" />
            <FailedHeading headingColor={headingColor}>
              Oops! Something went Wrong
            </FailedHeading>
            <FailedNote noteColor={noteColor}>
              We are having some trouble to complete your request <br /> Please
              try again Later
            </FailedNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
