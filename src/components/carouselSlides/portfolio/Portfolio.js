import React, { Component } from "react"
import { Row, Column } from "simple-flexbox"
import styled from "styled-components"
import PfPiece from "./PfPiece"
import myDataBasic from "../../../assets/images/myDataBasic.png"

const Title = styled.h1`
    font-size: 5vh;
`

const Subtitle = styled.p`
    font-size: 1.5vh;
    padding-top: 1.5vh;
`

class Portfolio extends Component {
    render () {
        return (
            <Column vertical='space-around'>
                
                    <Title>Portfolio</Title>
                
                <Row horizontal='space-around' vertical='center' style={{'borderTop': '1px solid white'}}>
                    {/* portfolio pieces */}
                    <PfPiece 
                        projTitle='myDataReact'
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                        gitLink='https://github.com/KPS-GitHub/myDataReact'
                    >
                    </PfPiece>
                    <PfPiece 
                        projTitle='myDataReact'
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                        gitLink='https://github.com/KPS-GitHub/myDataReact'
                    >
                    </PfPiece>
                    <PfPiece 
                        projTitle='myDataReact'
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                        gitLink='https://github.com/KPS-GitHub/myDataReact'
                    >
                    </PfPiece>
                </Row>
                <Row horizontal='space-around' vertical='center'>
                    {/* portfolio pieces */}
                    <PfPiece
                        projTitle='myDataReact' 
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                        gitLink='https://github.com/KPS-GitHub/myDataReact'
                    >
                    </PfPiece>
                    <PfPiece 
                        projTitle='myDataReact'
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                        gitLink='https://github.com/KPS-GitHub/myDataReact'
                    >
                    </PfPiece>
                    <PfPiece 
                        projTitle='myDataReact'
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                        gitLink='https://github.com/KPS-GitHub/myDataReact'
                    >
                    </PfPiece>
                </Row>

                <Subtitle>mouse-over a project to see the technologies used</Subtitle>

                <Row horizontal='spaced' vertical='center' style={{'margin-top': '10vh'}}>
                    <Column>
                        <p>About Me</p>
                    </Column>
                    <Column>
                        <p>Contact</p>
                    </Column>
                </Row>
            </Column>
        )
    }
}

export default Portfolio