import React, { Component } from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import ContentContainer from "../../components/Container/ContentContainer";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import Fade from "react-reveal/Fade";
import Small from "../../components/Container/Small";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
`;

class DevPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer
          gridTemplateRows="2fr 2fr 2fr 2fr 2fr 2fr"
          gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
          bgHeight="100vh"
          //   backgroundColor="#595B67"
          backgroundColor="rgba(white, 0.25);"
        >
          <NavBar />
          <ContentContainer
            gridRowStart="2"
            gridRowEnd="6"
            gridColumnStart="2"
            gridColumnEnd="7"
            backgroundColor="#9DC3C2"
            bgheight="100vh"
            borderRadius="5% 5% 0 0"
          >
            <ContentContainer></ContentContainer>
            <ContentContainer gridColumnStart="2" gridColumenEnd="3">
              <Small>
                <p>
                  I'm currently working as a Systems Engineer and Freelancer
                  within Silicon Valley. I've worked in technical operations for
                  over a decade, for companies like Argo AI, Sheetmusicplus,
                  Swimoutlet and Host Department.
                </p>

                <p>
                  I'm Insaiably curious, driven to innovate, and perpetually
                  plugged into new technologies. You can read more about me
                  <a href="/home"> here</a>!
                </p>
                <p>
                  In the meantime, thanks so much for stopping by -- and feel
                  free to say hi through <a href="/home"> email </a>. or my
                  <a href="https://www.linkedin.com/in/rjtiglao/"> linkedin </a>
                  . profile.
                </p>
              </Small>
            </ContentContainer>
          </ContentContainer>
        </MainContainer>
      </div>
    );
  }
}

export default DevPage;
