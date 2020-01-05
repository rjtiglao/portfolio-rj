import React, { Component } from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import NavBar from "../../components/NavBar/NavBar";
import ContentContainer from "../../components/Container/ContentContainer";
import Small from "../../components/Container/Small";
import "./style.css";
import CityBg from "../../assets/img/city.jpeg";
import Logo from "../../assets/logo/logo-rj2.png";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import TechIcons from "../../lists/TechIcons";
import SlideView from "../../components/Slider/Slider";

const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
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
        <MainContainer bgHeight="100vh">
          <ContentContainer>
            <NavBar />
            <Image src={CityBg}></Image>

            <ContentContainer gridTemplateColumns="5% auto 5%">
              <ContentContainer
                gridTemplateColumns="50% 50%"
                gridColumnStart="2"
                JustifyContent="center"
                AlignContent="center"
              >
                <Small gridColumnStart="1">
                  <div>
                    <strong>
                      <h1>TECHNOLOGY</h1>
                      <SlideView />
                    </strong>
                  </div>
                </Small>
                <Small gridColumnStart="2">
                  <ContentContainer>
                    <div>
                      <Fade right delay={1000}>
                        <h1>Helllloooooo aklsdjaslkdj</h1>
                        <p>this is a test</p>
                        <h2>asdasdas</h2>
                      </Fade>
                    </div>
                  </ContentContainer>
                </Small>
              </ContentContainer>
            </ContentContainer>
          </ContentContainer>
        </MainContainer>
      </div>
    );
  }
}

export default DevPage;
