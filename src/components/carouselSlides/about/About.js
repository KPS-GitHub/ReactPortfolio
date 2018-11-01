import React, { Component } from "react"
import { Row, Column } from "simple-flexbox"
import styled from "styled-components"

const Title = styled.h1`
    font-size: 5vh;
`

const Email = styled.p`
    margin-bottom: 2vh;
`

class About extends Component {
    render () {
        return ( 
            
            <Column vertical='space-around'>
                <Title>Kennan Smith</Title>
                <Email>kennan.smith1@gmail.com</Email>
                <Column style={{'borderTop': '1px solid white'}}>
                    <h3>Full-Stack Web Developer (MERN), Lover of Creativity</h3>
                    <p>I love simple beauty and I am aware that oversimplifying creates a product that can't distinguish itself from the crowd. This is why I go into every web development project with the goals of a simple presentation, a seamless user experience, and a creative flair that provides a fitting personality.</p>
                </Column>
                <Row horizontal='spaced' vertical='center' style={{'margin-top': '20vh'}}>
                    <Column>
                        <p>Contact</p>
                    </Column>
                    <Column>
                        <p>Portfolio</p>
                    </Column>
                </Row>
            </Column>

            
        )
    }
}

export default About