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
      <MainContainer>
        <NavBar />
        <ColContainer gridRowStart="span 5">
          <Image src={HardwareTech}></Image>
          <Fade left>
            <strong>
              <a href="/technology">Technology</a>
            </strong>
          </Fade>
        </ColContainer>
        <ColContainer gridRowStart="span 5" gridColumnStart="2">
          <Image src={Working}></Image>
          <a href="/culture">Culture</a>
        </ColContainer>
        <ColContainer gridRowStart="span 5" gridColumnStart="3">
          <Image src={Working2}></Image>
          <a href="/development">Development</a>
        </ColContainer>
        <ColContainer gridRowStart="span 5" gridColumnStart="4">
          <Image src={ProjectManagement}></Image>
          <a href="/development">Projects</a>
        </ColContainer>
      </MainContainer>
    </div>
  );
};

export default HomePage;
