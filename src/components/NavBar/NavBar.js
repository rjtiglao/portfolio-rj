import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  position: absolute;
  z-index: 1;
  background-color: rgba(27, 30, 46, 0.5);
  overflow-x: hidden;
  color: white;
  transition: 0.5s;
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    list-style-type: none;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-start: 3;
  list-style-type: none;
`;
const Nav = () => {
  return (
    <NavBar>
      <ul>
        <li>Ryan Tiglao</li>
      </ul>
      <List>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </List>
    </NavBar>
  );
};

export default Nav;
