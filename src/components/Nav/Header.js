import React from "react";
import { NavLink as Link, withRouter } from "react-router-dom";
// import "./Header.css";
// import logo from "../../assets/logo.png";
import styled from "styled-components";
import logo from "../../logo.png";

const WebHeader = styled.div`
  /* margin: 0vh 10vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8vh;
  background: white;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  border: 1px solid grey;

  & .link img {
    width: 75vw;
    max-height: 3vh;
    /* padding-bottom: 1vh; */
  }
`;
const Header = props => {
  return (
    <WebHeader>
      <Link to="/" className="link" />
    </WebHeader>
  );
};

export default withRouter(Header);
