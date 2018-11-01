import React, { Component } from "react"
import styled from "styled-components"

let Anchor = styled.a`
    
`

let Image = styled.img`
    height: 10vh;
`

let Overlay = styled.div`
    margin: 1.5vh 1vw .5vh 1vw;
    background: black;
    opacity: 1;
    transition: 0.1s;
    &:hover {
        opacity: 0.5;
        transition: 0.2s;
    }
`



class PfPiece extends Component {
    render () {
        return (
            <Overlay>
                <Anchor href={this.props.anchorLink}>
                    <Image src={this.props.imageLink}>
                    </Image>
                </Anchor>
            </Overlay>
        )
    }
}

export default PfPiece
