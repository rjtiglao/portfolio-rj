import React from "react";
import styled from "styled-components";

const SmallContainer = styled.div`
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: ${props => props.gridGap || ""};
  margin-left: ${props => props.marginLeft || ""};
  background-color: ${props => props.backgroundColor || ""};
  background-image: ${props => props.backgroundImg || ""};
  background: ${props => props.BackGround || ""};
  height: ${props => props.bgHeight || ""};
  width: ${props => props.bgWidth || ""};
  grid-column-start: ${props => props.gridColumnStart || ""};
  grid-column-end: ${props => props.gridColumnEnd || ""};
  grid-row-start: ${props => props.gridRowStart || ""};
  grid-row-end: ${props => props.gridRowEnd || ""};
  border-radius: ${props => props.borderRadius || ""};
  border: ${props => props.Border || ""};
  grid-column: ${props => props.gridColumn || ""};
  position: ${props => props.conPosition || ""};
  padding: ${props => props.Padding || ""};
  margin: ${props => props.Margin || ""};
  overflow: ${props => props.Overflow || ""};
  justify-content: ${props => props.JustifyContent || ""};
  align-content: ${props => props.AlignContent || ""};
  color: ${props => props.Color || ""};
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    list-style-type: none;
    padding: 0;
  }
`;

export default SmallContainer;
