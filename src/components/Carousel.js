import React, { Component } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import About from "./carouselSlides/about/About"
import Portfolio from "./carouselSlides/portfolio/Portfolio"
import Contact from "./carouselSlides/contact/Contact"
import blackBg from "../assets/images/blackBg.jpg"

const CarouselBgStyles = {
  height: '80vh',
  opacity: 0.85,
}

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
            <img style={CarouselBgStyles} alt="black background image used for carousel" src={blackBg} />
            <Carousel.Caption style={{bottom: '0vh'}}>
              <About>
              </About>    
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={CarouselBgStyles} alt="black background image used for carousel" src={blackBg} />
            <Carousel.Caption style={{bottom: '0vh'}}>
              <Portfolio>
              </Portfolio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={CarouselBgStyles} alt="black background image used for carousel" src={blackBg} />
            <Carousel.Caption style={{bottom: '0vh'}}>
              <Contact>
              </Contact>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel