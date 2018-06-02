import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LoggedOut/LandingPage/LandingPage";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./components/Nav/Header";
import NavDrawer from "./components/Nav/Nav";
import styled from "styled-components";
import Contact from "./components/LoggedOut/Contact/Contact";
import Tech from "./components/LoggedOut/Technology/Tech";
import AccessibleNav from "./components/Nav/AccessibleNav";
import Dashboard from "./components/Secured/Dashboard/Dashboard";
import { getUser } from "./ducks/userReducer";
import { getJoinedCampaign } from "./ducks/campaignReducer";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = { navOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ navOpen: !this.state.navOpen });
    // console.log(this.state.navOpen);
  }
  componentDidMount() {
    this.props.getUser().then(response => {
      this.props.user
        ? this.props.getJoinedCampaign(response.value.user_id)
        : null;
    });
  }
  render() {
    // console.log(`APP.js props`, this.props);
    return (
      <div
        className="App"
        style={{
          position: "relative"
        }}
      >
        <NavComponent className={this.state.navOpen ? "open" : "hidden"}>
          <NavDrawer user={this.props.user} navOpen={this.state.navOpen} />
        </NavComponent>

        <NavToggleBtn
          onClick={this.toggleMenu}
          className={`menuToggle ${
            this.state.navOpen ? "openMenu" : "closedMenu"
          }`}
        >
          <NavToggleElement className="top" />
          <NavToggleElement className="middle" />
          <NavToggleElement className="bottom" />
        </NavToggleBtn>

        <Header />
        <AccessibleNav />
        <Content>
          <Route path="/contact" component={Contact} />
          <Route path="/tech" component={Tech} />
          <Route
            path="/"
            render={() =>
              this.props.user ? (
                <Dashboard user={this.props.user} joined={this.props.joined} />
              ) : (
                <LandingPage user={this.props.user} />
              )
            }
          />
        </Content>
        {this.state.navOpen ? (
          <CloseDiv onClick={() => this.setState({ navOpen: false })} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    joined: state.campaignReducer.joined
  };
};

export default withRouter(
  connect(mapStateToProps, { getUser, getJoinedCampaign })(App)
);

const NavComponent = styled.div`
  position: absolute;
  width: 100vw;
  border: 1px solid grey;
  color: black;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  /* display: none; */
  z-index: 10;
  background: #1e2f52;
  /* height: ; */

  &.open {
    top: 8vh;
    transition: top 0.3s ease-in;
  }
  &.hidden {
    top: -55vh;
    transition: top 0.3s ease-in;
  }
`;

const NavToggleBtn = styled.div`
  height: 30px;
  width: 48px;
  position: absolute;
  top: 2vh;
  right: 1vw;
  padding: 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: all 1s linear;

  &.openMenu span.middle {
    opacity: 0;
  }
  &.openMenu span.top {
    top: 45%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    /* background: white; */
    transform: rotate(45deg);
  }
  &.openMenu span.bottom {
    bottom: 45%;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    /* background: white; */
  }
`;
const NavToggleElement = styled.span`
  background-color: black;
  height: 2px;
  width: 20px;
  border-radius: 2px;
  position: absolute;
  margin: 0 auto;
  -webkit-transition: all 1s ease;

  &.top {
    top: 30%;
  }

  &.bottom {
    bottom: 30%;
  }
`;
const CloseDiv = styled.div`
  background: #1e2f52;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  opacity: 0.8;
  transition: all 1s linear;
`;
const Content = styled.div`
  position: fixed;
  bottom: 0;
  height: 92vh;
  border: 1px solid grey;
  width: 100vw;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* transition: all 1s linear; */
`;
