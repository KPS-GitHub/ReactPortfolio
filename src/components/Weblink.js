import React, { Component } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

let Anchor = styled.a`
    margin: 1vw;
`
let Icon = styled.img`
    height: 10vh;
`

class WebLink extends Component {
    render () {
        return (
            // <a href={this.props.siteLink} style={{margin : '1vw'}}>
                // <img src={this.props.siteIcon} alt={this.props.altText} style={{height:'10vh'}}>
             // </img>
            // </a>
            <Anchor href={this.props.siteLink}>
                <Icon src={this.props.siteIcon} alt={this.props.altText}>
                </Icon>
            </Anchor>
        )
    }
}

export default WebLink