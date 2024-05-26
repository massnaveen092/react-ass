import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoDetailView from './components/VideoDetailView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideo'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isDarktheme: false,
    activetab: 'Home',
  }

  changetab = tab => {
    this.setState({activetab: tab})
  }

  toggleTheme = () => {
    this.setState(prevstate => ({
      isDarktheme: !prevstate.isDarktheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(each => each.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {savedVideos, isDarktheme, activetab} = this.state

    return (
      <ThemeAndVideoContext.Consumer
        value={{
          savedVideos,
          isDarktheme,
          activetab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changetab: this.changetab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default App
