import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'

import {VideoDetailsViewContainer, LoaderConatiner} from './styledComponents'

const apistatusConstsnats = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailView extends Component {
  state = {
    apistatus: apistatusConstsnats.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  updatedata = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumnbail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apistatus: apistatusConstsnats.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwttoken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwttoken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedata = this.updatedata(data)
      this.setState({
        videoDetails: updatedata,
        apistatus: apistatusConstsnats.success,
      })
    } else {
      this.setState({apistatus: apistatusConstsnats.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevstate => ({
      isLiked: !prevstate.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevstate => ({
      isDisLiked: !prevstate.isDisLiked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <LoaderConatiner data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderConatiner>
  )

  renderPlayerVideoView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state

    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisliked={this.clickDisliked}
        clickSaved={this.clickSaved}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
      />
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideoDetailView = () => {
    const {apistatus} = this.state

    switch (apistatus) {
      case apistatusConstsnats.success:
        return this.renderVideoDetailView()
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
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailsViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetailView()}
              </VideoDetailsViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoDetailView
