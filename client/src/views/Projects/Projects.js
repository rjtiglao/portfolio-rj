import React, { Component } from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import NavBar from "../../components/NavBar/NavBar";
import ColContainer from "../../components/Container/ColContainer";
import "./style.css";
import ProjectManagement from "../../assets/img/projectmanagment.jpg";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  background-repeat: repeat-y;
`;

class DevPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer>
          <NavBar />
          <ColContainer gridRowStart="span 5" gridColumnStart="span 2">
            <Image src={ProjectManagement}></Image>
            <strong>
              <a href="/projects">Projects</a>
            </strong>
          </ColContainer>
          <div>hellp there</div>
        </MainContainer>
      </div>
    );
  }
}

export default DevPage;
