import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'

import {
  TrendingContainer,
  TiTleIconConatiner,
  TrendingVideoTitle,
  TrendingVideoList,
  TrendingText,
  LoaderContainer,
} from './styledComponents'

const apistatusConstsnats = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apistatusConstsnats.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apistatusConstsnats.inProgress})
    const jwttoken = Cookies.get('jwt_token')
    const url = 'https:/apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwttoken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apistatusConstsnats.success,
      })
    } else {
      this.setState({apiStatus: apistatusConstsnats.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="Loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {trendinmgVideos} = this.state
    return (
      <TrendingVideoList>
        {trendinmgVideos.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apistatusConstsnats.success:
        return this.renderVideosView()
      case apistatusConstsnats.failure:
        return this.renderFailureView()
      case apistatusConstsnats.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '231f20'

          return (
            <div data-testid="trending">
              <Header />
              <NavigationBar />
              <TrendingContainer
                data-testid="trending"
                onClick={toggleTheme}
                style={{backgroundColor: bgColor}}
              >
                <TrendingVideoTitle>
                  <TiTleIconConatiner>
                    <HiFire size={35} color="#ff0000" />
                  </TiTleIconConatiner>
                  <TrendingText color={textColor}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingVideos()}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingVideos
