import React, { Component } from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import ContentContainer from "../../components/Container/ContentContainer";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import Fade from "react-reveal/Fade";
import Small from "../../components/Container/Small";
import styled from "styled-components";
import PageBackground from "../../assets/img/ideas.jpeg";
import SlideView from "../../components/Slider/Slider2";

const Image = styled.img`
  max-width: 100%;
  height: ${props => props.Height || ""}
  z-index: ${props => props.zIndex || ""}
  position: absolute;
  width: 100%;
`;

class DevPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer
        gridTemplateColumns="5% 15% 20% auto 5%"
        gridTemplateRows="150px auto 5%"
        bgHeight="100vh"
        gridGap="15px"
        conPosition="relative"
        Overflow="hidden"
      >
        <NavBar />
        {/* Background Image for About Me Page */}
        <Image src={PageBackground} zIndex="-1" Height="100vh" />
        {/* General About Me Information */}
        <ContentContainer
          gridColumnStart="4"
          gridRowStart="2"
          // backgroundColor="black"
        >
          <Small
            conPosition="absolute"
            justifyContent="center"
            alignContent="center"
          >
            <div>
              <strong>
                <h1>TECHNOLOGY</h1>
                <SlideView />
              </strong>
            </div>
          </Small>
        </ContentContainer>
      </MainContainer>
    );
  }
}

export default DevPage;
