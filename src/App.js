import React, { Component } from 'react'
import { Row, Column } from "simple-flexbox"
import Weblink from "./components/Weblink"

class App extends Component {
  render() {
    return (
        <Row vertical='stretch' horizontal='center'>
          {/* -- Header Row -- */}
          <Row vertical='center' horizontal='center'>
            {/* GitHub */}
            <Weblink siteLink='https://github.com/KPS-GitHub' siteIcon='https://cdn2.iconfinder.com/data/icons/free-social-media-17/155/reddit-128.png'>
            </Weblink>
            {/* LinkedIn */}
            <Weblink siteLink='https://www.linkedin.com/in/kennansmith/' siteIcon='https://cdn2.iconfinder.com/data/icons/free-social-media-17/155/linkedin-128.png'>
            </Weblink>
            {/* Twitter */}
            <Weblink siteLink='https://twitter.com/KevinSm02334141' siteIcon='https://cdn2.iconfinder.com/data/icons/free-social-media-17/158/twitter-128.png'>
            </Weblink>
          </Row>
          {/* -- Carousel/Main Content Row -- */}
          <Row vertical='center' horizontal='center'>

          </Row>
          {/* -- Footer Row -- */}
          <Row>

          </Row>
        </Row>
    )
  }
}

export default App
