import React, { Component } from "react"
import ReactDOM from "react-dom"
import styled, { keyframes } from "styled-components"

let Anchor = styled.a`
    margin: 1.5vw;
`
let Icon = styled.img`
    width: 8.5vw;
    opacity: 0.75;
    transition: 0.4s;
    &:hover {
        width: 8.75vw;
        opacity: 0.5;
        transition: 0.4s;
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