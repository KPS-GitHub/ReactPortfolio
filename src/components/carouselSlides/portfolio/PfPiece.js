import React, { Component } from "react"
import styled from "styled-components"

let Anchor = styled.a`
    margin: 1.5vh 1vw .5vh 1vw;
`

let Image = styled.img`
    height: 10vh;
`



class PfPiece extends Component {
    render () {
        return (
            <Anchor href={this.props.anchorLink}>
                <Image src={this.props.imageLink}>
                </Image>
            </Anchor>
        )
    }
}

export default PfPiece
