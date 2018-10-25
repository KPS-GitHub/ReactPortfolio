import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Carousel } from "react-bootstrap"
import About from "./carouselSlides/about/About"
import Portfolio from "./carouselSlides/portfolio/Portfolio"
import Contact from "./carouselSlides/contact/Contact"
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
            <img style={{height: '80vh'}} alt="black background image used for carousel" src={blackBg} />
            <Carousel.Caption style={{bottom: '20vh'}}>
              <About>
              </About>    
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height: '80vh'}} alt="black background image used for carousel" src={blackBg} />
            <Carousel.Caption style={{bottom: '20vh'}}>
              <Portfolio>
              </Portfolio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height: '80vh'}} alt="black background image used for carousel" src={blackBg} />
            <Carousel.Caption style={{bottom: '20vh'}}>
              <Contact>
              </Contact>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel