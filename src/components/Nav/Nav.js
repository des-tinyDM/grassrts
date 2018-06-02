import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../logo.png";

const NavLogoContainer = styled.div`
  background-color: white;
  height: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  border: 1px solid grey;

  & img {
    /* width: 75vw; */
    height: 3vh;
    /* height: 70%; */

    /* margin: 10vw; */
    /* z-index: ; */
  }
  @media only screen and (min-width: 1224px) {
    & img {
      margin-left: 5vw;
      align-self: flex-start;
    }
  }
`;

const NavLinkItem = styled.div`
  background: #1e2f52;
  padding-left: 10vw;
  height: 6vh;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;

  &:visited {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: red;
  }
  p {
    width: 85%;
  }
`;

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className={`NavDrawer ${this.props.navOpen ? "open" : "hidden"}`}>
        <NavLogoContainer
          className="nav-title-container"
          style={{ backgroundColor: "white" }}
        >
          <img className="nav-title" src={logo} />
        </NavLogoContainer>
        <Link to="/">
          <NavLinkItem>
            <i
              className="fab fa-dashcube"
              style={{ fontSize: "1.5em", marginRight: "2vw" }}
            />
            <p>Dashboard</p>
          </NavLinkItem>
        </Link>

        <Link to="/profile">
          <NavLinkItem className="menu-item">
            <i
              className="fas fa-user faicon"
              style={{ fontSize: "1.5em", marginRight: "2vw" }}
            />
            <p>Profile</p>
          </NavLinkItem>
        </Link>
        <Link to="/campaigns">
          <NavLinkItem>
            <i
              className="fas fa-clipboard-check faicon"
              style={{ fontSize: "1.5em", marginRight: "2vw" }}
            />
            <p>Campaign</p>
          </NavLinkItem>
        </Link>
        <Link to="/events">
          <NavLinkItem>
            <i
              className="fas fa-calendar-alt faicon"
              style={{ fontSize: "1.5em", marginRight: "2vw" }}
            />
            <p>Events</p>
          </NavLinkItem>
        </Link>
        <Link to="/data">
          <NavLinkItem>
            <i
              className="fas fa-chart-line faicon"
              style={{ fontSize: "1.5em", marginRight: "2vw" }}
            />
            <p>Data</p>
          </NavLinkItem>
        </Link>
        <Link to="/contacts">
          <NavLinkItem>
            <i
              className="fas fa-users faicon"
              style={{ fontSize: "1.5em", marginRight: "2vw" }}
            />
            <p>Contacts</p>
          </NavLinkItem>
        </Link>
        {this.props.admin ? (
          <NavLinkItem>
            <Link to="/campaign/volunteers">
              <p>Volunteers</p>
            </Link>
          </NavLinkItem>
        ) : null}
        {!this.props.user ? (
          <a href={process.env.REACT_APP_LOGIN}>
            >
            <NavLinkItem className="menu-item log-in-out">
              <i
                className="fas fa-sign-in-alt faicon"
                style={{ fontSize: "1.5em", marginRight: "2vw" }}
              />
              <p>Login</p>
            </NavLinkItem>
          </a>
        ) : (
          <a href={process.env.REACT_APP_LOGOUT}>
            >
            <NavLinkItem className="menu-item log-in-out">
              <i
                className="fas fa-sign-in-alt faicon"
                style={{ fontSize: "1.5em", marginRight: "2vw" }}
              />
              <p>Logout</p>
            </NavLinkItem>
          </a>
        )}
      </nav>
    );
  }
}

export default NavDrawer;
