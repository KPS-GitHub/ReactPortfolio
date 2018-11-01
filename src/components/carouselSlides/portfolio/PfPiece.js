import React, { Component } from "react"
import styled from "styled-components"
import { Row } from "simple-flexbox"

let Title = styled.h1`
    font-size: 2vh;
`

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

let GitHubLink = styled.a`
    border-radius: 100%;
    margin-bottom: -1px;
`

let GitHubLogo = styled.img`
    height: 4vh;
    transition: 0.1s;
    &:hover {
        height: 4.5vh;
        transition: 0.2s;
    }
`



class PfPiece extends Component {
    render () {
        return (
            <div>
                <Overlay>
                    <Row horizontal='space-between'>
                        <Title>
                            {this.props.projTitle}
                        </Title>
                        <GitHubLink href={this.props.gitLink}>
                            <GitHubLogo src={'data:image/png;base64,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'}>
                            </GitHubLogo>
                        </GitHubLink>
                    </Row>
                    <Anchor href={this.props.anchorLink}>
                        <Image src={this.props.imageLink}>
                        </Image>
                    </Anchor>
                </Overlay>
            </div>
        )
    }
}

export default PfPiece
