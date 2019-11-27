import React, { Component } from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import "./style.css";
import CityBg from "../../assets/img/city.jpeg";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  width: 100%;
`;

class DevPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer bgHeight="100vh" gridTemplateColumns="repeat(24, 1fr)">
          <NavBar />
          <Image src={CityBg}></Image>

          <ContentContainer gridRowStart="2" gridRowEnd="4" gridColumnStart="2">
            <Fade left>
              <h1>Helllloooooo aklsdjaslkdj</h1>
              <h1>asdasdas</h1>
            </Fade>
          </ContentContainer>
          <ContentContainer
            gridRowStart="2"
            gridRowEnd="5"
            gridColumnStart="22"
            gridColumnEnd="14"
            backgroundColor="rgba(27, 30, 46, 0.5);"
          >
            <Fade right>
              <h1>Helllloooooo aklsdjaslkdj</h1>
              <h1>asdasdas</h1>
            </Fade>
          </ContentContainer>
        </MainContainer>
      </div>
    );
  }
}

export default DevPage;
