import React, { Component } from "react"
import ReactDOM from "react-dom"
import styled, { keyframes } from "styled-components"

let Anchor = styled.a`
    margin: 1vw;
`
let Icon = styled.img`
    height: 10vh;
    opacity: 0.75;
    transition: 0.2s;
    &:hover {
        height: 11vh;
        opacity: 0.5;
        transition: 0.2s;
    }
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