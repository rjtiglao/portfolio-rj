import React, { Component } from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import ContentContainer from "../../components/Container/ContentContainer";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import Fade from "react-reveal/Fade";
import Small from "../../components/Container/Small";
import styled from "styled-components";
import PageBackground from "../../assets/img/aboutme.jpeg";

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
        // backgroundColor="#595B67"
        gridGap="15px"
        conPosition="relative"
        Overflow="hidden"
      >
        <NavBar />
        <Image src={PageBackground} zIndex="-1" Height="100vh" />
        {/* General About Me Information */}
        <ContentContainer
          gridColumnStart="2"
          gridRowStart="2"
          backgroundColor="rgba(255,255,255, 0.5)"
          Border="1px solid black"
          borderRadius="0 0 10% 0"
          conPosition="relative"
          bgHeight="300px"
          Overflow="scroll"
        >
          <Small Padding="5px">
            <p>
              American Native
              <br />
              Tech Generalist and Freelancer
              <br />
              <h4>Location:</h4> San Francisco Bay Area
              <br />
              <h4>Current Employer:</h4> Argo AI
            </p>
          </Small>
        </ContentContainer>
        {/* PHOTO AND INFORMATION */}
        <ContentContainer
          gridColumnStart="3"
          gridRowStart="2"
          backgroundColor="rgba(255,255,255, 0.5)"
          Border="1px solid black"
          conPosition="relative"
          bgHeight="450px"
          borderRadius="0 0 10% 0"
        >
          <Small
            backgroundColor="red"
            conPosition="relative"
            Margin="25px 25px 25px 25px"
            Border="1px black solid"
          >
            "Photo"
          </Small>
          <Small bgHeight="25%">
            <h4>Links:</h4>
            <a href="https://www.linkedin.com/in/rjtiglao/">Linkedin</a>
          </Small>
        </ContentContainer>
        {/* ABOUT ME DESCRIPTION */}
        <ContentContainer
          gridColumnStart="4"
          gridRowStart="2"
          gridRowEnd="3"
          backgroundColor="rgba(255,255,255, 0.5)"
          borderRadius="0 0 10% 0 "
          gridTemplateRows="10% auto"
          Padding=" 15px"
          Border="1px black solid"
          // Margin="0 0 25% 0"
        >
          <Small gridRowStart="1">
            <h2>Description</h2>
          </Small>
          <Small gridRowStart="2">
            <p>
              I'm currently working as a Systems Engineer and Freelancer within
              Silicon Valley. I've worked in technical operations for over a
              decade, for companies like Argo AI, Sheetmusicplus, Swimoutlet and
              Host Department.
              <br />
              <br />
              I'm Insaiably curious, driven to innovate, and perpetually plugged
              into new technologies. You can read more about me
              <a href="/home"> here</a>!
              <br />
              <br />
              In the meantime, thanks so much for stopping by -- and feel free
              to say hi through <a href="/home"> email </a>. or my
              <a href="https://www.linkedin.com/in/rjtiglao/"> linkedin </a>.
              profile.
            </p>
          </Small>
        </ContentContainer>
      </MainContainer>
    );
  }
}

export default DevPage;
