import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  position: absolute;
  z-index: 1;
  // background-color: rgba(27, 30, 46, 0.5);
  overflow-x: hidden;
  color: white;
  transition: 0.5s;
  width: 100%;
  align-content: center;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 50%;
  list-style-type: none;
`;
const Nav = () => {
  return (
    <NavBar>
      <List>
        <li>
          <h3>About</h3>
        </li>
        <li>
          <h3>Projects</h3>
        </li>
        <li>
          <h3>Contact</h3>
        </li>
      </List>
    </NavBar>
  );
};

export default Nav;
