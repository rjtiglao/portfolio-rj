import React from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import NavBar from "../../components/NavBar/NavBar";
import ColContainer from "../../components/Container/ColContainer";
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

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <MainContainer gridTemplateColumns="repeat(4, 25%)">
        {/* This section will show all development apps created or maybe one per language or framework? */}
        <ColContainer gridRowStart="span 5">
          <Image src={Working2}></Image>
          <strong>
            <a href="/development">
              <h3>Development</h3>
            </a>
          </strong>
        </ColContainer>
        {/* All Projects I've lead up to this point and teams upported. Common tools and project */}
        <ColContainer gridRowStart="span 5" gridColumnStart="2">
          <Image src={ProjectManagement}></Image>
          <strong>
            <a href="/projects">
              <h3>Projects</h3>
            </a>
          </strong>
        </ColContainer>
        {/* Showcase all the tools and services used. Possible examples for a few of them. */}
        <ColContainer gridRowStart="span 5" gridColumnStart="3">
          <Image src={HardwareTech}></Image>
          <strong>
            <a href="/technology">
              <h3>Technology</h3>
            </a>
          </strong>
        </ColContainer>
        {/* Everything outside of the tech world. Accomplishments outside of the tech world. Something about me. */}
        <ColContainer gridRowStart="span 5" gridColumnStart="4">
          <Image src={Working}></Image>
          <strong>
            <a href="/about">
              <h3>About Me</h3>
            </a>
          </strong>
        </ColContainer>
      </MainContainer>
    </div>
  );
};

export default HomePage;
