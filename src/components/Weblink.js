import React, { Component } from "react"
import ReactDOM from "react-dom"
import styled, { keyframes } from "styled-components"

let Anchor = styled.a`
    margin: 1vw 1.25vw 1vw 1.25vw;
`
let Icon = styled.img`
    width: 5vw;
    opacity: 0.75;
    transition: 0.4s;
    &:hover {
        opacity: 0.5;
        transition: 0.4s;
    }
`

class WebLink extends Component {
    render () {
        return (
            <Anchor href={this.props.siteLink}>
                <Icon src={this.props.siteIcon} alt={this.props.altText}>
                </Icon>
            </Anchor>
        )
    }
}

export default WebLink