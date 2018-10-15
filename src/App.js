import React, { Component } from 'react'
import { Row, Column } from "simple-flexbox"
import Weblink from "./components/Weblink"


// IMPROVEMENT OPPORTUNITY: switch the weblink icons from url's (not guaranteed to always work) to files in the assets folder

class App extends Component {
  render() {
    return (

        // "Container" Column
        <Column vertical='center' horizontal='center'>

          {/* -- Header Row -- */}
          <Row vertical='center' horizontal='center'>
            {/* GitHub */}
            <Weblink 
              siteLink='https://github.com/KPS-GitHub' 
              siteIcon='https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-128.png'
              altText='GitHub icon, click to open the GitHub profile for Kennan Smith'>
            </Weblink>
            {/* LinkedIn */}
            <Weblink 
              siteLink='https://www.linkedin.com/in/kennansmith/' 
              siteIcon='https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/linkedin-square-social-media-128.png'
              altText='LinkedIn icon, click to open the LinkedIn profile for Kennan Smith'>
            </Weblink>
            {/* Twitter */}
            <Weblink 
              siteLink='https://twitter.com/KevinSm02334141' 
              siteIcon='https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/twitter-square-social-media-128.png'
              altText='Twitter icon, click to open the Twitter profile for Kennan Smith'>
            </Weblink>
          </Row>

          {/* -- Carousel/Main Content Row -- */}
          <Row vertical='center' horizontal='center'>
            
          </Row>

          {/* -- Footer Row -- */}
          <Row>

          </Row>

        </Column>
    )
  }
}

export default App
