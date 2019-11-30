import React, { Component } from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import "./style.css";
import CityBg from "../../assets/img/city.jpeg";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import TechIcons from "../../lists/TechIcons";
import SlideView from "../../components/Slider/Slider";
import Nodejs from "../../assets/icons/nodejs.png";
import { isContainer } from "postcss-selector-parser";

const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  width: 100%;
`;
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Icon = styled.img`
  z-index: -1;
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

          <ContentContainer
            gridRowStart="2"
            gridRowEnd="8"
            gridColumnStart="2"
            gridColumnEnd="13"
          >
            <div>
              <h1>TECHNOLOGY</h1>
              <SlideView />
            </div>
          </ContentContainer>
          <ContentContainer
            gridRowStart="2"
            gridRowEnd="5"
            gridColumnStart="22"
            gridColumnEnd="14"
            backgroundColor="rgba(27, 30, 46, 0.5);"
            Padding="20px"
          >
            <div>
              <Fade right delay={1000}>
                <h1>Helllloooooo aklsdjaslkdj</h1>
                <p>this is a test</p>
                <h2>asdasdas</h2>
              </Fade>
            </div>
          </ContentContainer>
        </MainContainer>
      </div>
    );
  }
}

export default DevPage;
