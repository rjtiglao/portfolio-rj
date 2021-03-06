import React from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import NavBar from "../../components/NavBar/NavBar";
import ColContainer from "../../components/Container/ColContainer";
import ContentContainer from "../../components/Container/ContentContainer";
import "./style.css";
import HardwareTech from "../../assets/img/hardware-tech.jpg";
import Working from "../../assets/img/working.jpg";
import Working2 from "../../assets/img/working2.jpg";
import ProjectManagement from "../../assets/img/projectmanagment.jpg";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
`;

const DevelopmentPage = () => {
  return (
    <div>
      <MainContainer>
        <NavBar />
        {/* This section will show all development apps created or maybe one per language or framework? */}
        <ColContainer gridRowStart="span 5">
          <Image src={Working2}></Image>
          <strong>
            <a href="/development">Development</a>
          </strong>
        </ColContainer>
        {/* All Projects I've lead up to this point and teams upported. Common tools and project */}
        <ColContainer gridRowStart="span 5" gridColumnStart="2">
          <Image src={ProjectManagement}></Image>
          <strong>
            <a href="/projects">Projects</a>
          </strong>
        </ColContainer>
        {/* Showcase all the tools and services used. Possible examples for a few of them. */}
        <ColContainer gridRowStart="span 5" gridColumnStart="3">
          <Image src={HardwareTech}></Image>
          <strong>
            <a href="/technology">Technology</a>
          </strong>
        </ColContainer>
        {/* Everything outside of the tech world. Accomplishments outside of the tech world. Something about me. */}
        <ColContainer gridRowStart="span 5" gridColumnStart="4">
          <Image src={Working}></Image>
          <strong>
            <a href="/about">About Me</a>
          </strong>
        </ColContainer>
        <ContentContainer
          gridRowStart="2"
          gridRowEnd="5"
          gridColumnStart="22"
          gridColumnEnd="14"
          backgroundColor="rgba(27, 30, 46, 0.5);"
          conPosition="absolute"
          bgHeight="50vh"
        >
          <Fade right>
            <h1>Helllloooooo aklsdjaslkdj</h1>
            <h1>asdasdas</h1>
          </Fade>
        </ContentContainer>
      </MainContainer>
    </div>
  );
};

export default DevelopmentPage;
