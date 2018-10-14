import React, { Component } from "react"
import ReactDOM from "react-dom"

class WebLink extends Component {
    render () {
        return (
            <a href={this.props.siteLink} style={{margin : '1vw'}}>
                <img src={this.props.siteIcon} alt={this.props.altText} style={{height:'10vh'}}>
                </img>
            </a>
        )
    }
}

export default WebLink