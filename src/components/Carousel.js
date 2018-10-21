import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Carousel } from "react-bootstrap"
import blackBg from "../assets/images/blackBg.jpg"

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img style={{height: '80vh'}} alt="900x500" src={blackBg} />
            <Carousel.Caption style={{bottom: '30vh'}}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height: '80vh'}} alt="900x500" src={blackBg} />
            <Carousel.Caption style={{bottom: '30vh'}}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height: '80vh'}} alt="900x500" src={blackBg} />
            <Carousel.Caption style={{bottom: '30vh'}}>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel