import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations1.css";
import "./style2.css";

const Wrapper = styled.div`
  width: 100%;
  background-color: "red";
  font: white;
`;
const content2 = [
  {
    description: "Developer Projects"
  },
  {
    description: "Operations Projects"
  },
  {
    description: "Project Management"
  },
  {
    description: "Entrepreneur Projects"
  }
];

const content = content2.map(content => (
  <div>
    <h1>{content["title"]}</h1>
  </div>
));

class SlideView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      duration: 2000,
      slider: "slider",
      buttonDisabled: "disabled",
      track: "track",
      slide: "slide",
      hidden: "hidden",
      previous: "previous",
      current: "current",
      next: "next"
    };
    return (
      <Wrapper back>
        <Slider {...settings}>
          {content2.map(content => (
            <h1>{content["description"]}</h1>
          ))}
        </Slider>
      </Wrapper>
    );
  }
}

export default SlideView;
