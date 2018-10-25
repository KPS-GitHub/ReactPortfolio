import React, { Component } from "react"
import { Row, Column } from "simple-flexbox"
import styled from "styled-components"
import PfPiece from "./PfPiece"
import myDataBasic from "../../../assets/images/myDataBasic.png"

const Title = styled.h1`
    font-size: 5vh;
    padding-bottom: 2vh;
`

class Portfolio extends Component {
    render () {
        return (
            <Column vertical='space-around'>
                
                    <Title>Portfolio</Title>
                
                <Row horizontal='space-around' vertical='center' style={{'borderTop': '1px solid white'}}>
                    {/* portfolio pieces */}
                    <PfPiece 
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                    >
                    </PfPiece>
                    <PfPiece 
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                    >
                    </PfPiece>
                    <PfPiece 
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                    >
                    </PfPiece>
                </Row>
                <Row horizontal='space-around' vertical='center'>
                    {/* portfolio pieces */}
                    <PfPiece 
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                    >
                    </PfPiece>
                    <PfPiece 
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                    >
                    </PfPiece>
                    <PfPiece 
                        anchorLink='https://github.com/KPS-GitHub/myDataReact'
                        imageLink={myDataBasic}
                    >
                    </PfPiece>
                </Row>

                <Row horizontal='spaced' vertical='center' style={{'margin-top': '20vh'}}>
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