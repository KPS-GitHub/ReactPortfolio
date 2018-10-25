import React, { Component } from "react"
import { Row, Column } from "simple-flexbox"
import styled from "styled-components"

const Title = styled.h1`
    font-size: 5vh;
    padding-bottom: 2vh;
    border-bottom: 1px solid white;
`

class Contact extends Component {
    render () {
        return (
            <Column vertical="space-around">
                <Title>Contact</Title>
                <form action="https://formspree.io/kennan.smith1@gmail.com" method="POST" class="form-horizontal">
                    <div class="form_first_row">
                        <div class="col-sm-12">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                        </div>
                    </div>
                    <div class="form_row">                                             
                        <div class="col-sm-12">
                        <input type="text" class="form-control" name="company" id="company" placeholder="Company" />
                        </div>
                    </div>
                    <div class="form_row">
                        <div class="col-sm-12">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="form_row">
                        <div class="col-sm-12">
                        <textarea class="form-control" rows="3" name="message" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <div class="form_submit">
                        <div class="col-sm-12">
                        <button type="submit" value="Send" class="btn btn-default">Send</button>
                        </div>
                    </div>
                </form>
                <Row horizontal='spaced' vertical='center' style={{'margin-top': '20vh'}}>
                    <Column>
                        <p>Portfolio</p>
                    </Column>
                    <Column>
                        <p>About Me</p>
                    </Column>
                </Row>
            </Column>
        )
    }
}

export default Contact