import React, { Component } from "react";
import styled from "styled-components";
import { PageContainer } from "../../styled/PageContainer";
import Footer from "../Footer";
import heroImg from "./heroImage.png";
import Calendar from "./../../Secured/Events/Calendar/Calendar";

class LandingPage extends Component {
  render() {
    return (
      <PageContainer id="Landing">
        <HeroBackground>
          <img src={heroImg} />
        </HeroBackground>
        <Hero className="hero">
          <div className="desc-box">
            <h3>Create Events</h3>
            <p className="long">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vulputate vestibulum metus, nec egestas turpis vehicula dictum. In
              bibendum suscipit erat eget egestas. Etiam volutpat nisl porttitor
              augue scelerisque convallis. Sed consequat nulla vehicula
              facilisis molestie. Nam cursus ligula diam, in tincidunt leo
              semper sodales.
            </p>
            <p className="short">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vulputate vestibulum metus, nec egestas turpis vehicula dictum.
            </p>
          </div>
          <div className="desc-box">
            <h3>Manage Volunteers</h3>
            <p className="long">
              Vestibulum condimentum, lectus sit amet vehicula mollis, dolor
              purus sodales elit, nec rhoncus risus eros vel libero. Aliquam
              hendrerit ante id nulla condimentum, blandit eleifend risus
              molestie. Sed nec tortor tincidunt nisi euismod rhoncus.
            </p>
            <p className="short">
              Vestibulum condimentum, lectus sit amet vehicula mollis, dolor
              purus sodales elit, nec rhoncus risus eros vel libero. Aliquam
              hendrerit ante id nulla condimentum.
            </p>
          </div>
          <div className="desc-box">
            <h3>Track Progress</h3>
            <p className="long">
              Praesent porttitor varius nisi vel hendrerit. Donec vitae ante at
              nisi accumsan pretium. Integer convallis molestie luctus. Praesent
              et laoreet lacus. Duis blandit ligula vel ex euismod, ac dignissim
              quam mollis. Vestibulum fermentum, neque eget ullamcorper ornare,
              ipsum velit eleifend risus.
            </p>
            <p className="short">
              Nam cursus ligula diam, in tincidunt leo semper sodales. Curabitur
              finibus erat ac quam scelerisque, non malesuada massa dignissim.
            </p>
          </div>
          <a href={process.env.REACT_APP_LOGIN}>
            <LoginButton id="landing-btn">JOIN OR VOLUNTEER</LoginButton>
          </a>
        </Hero>
        <TrustedOrgs className="TrustedOrgs">
          <h1>Campaigns Using Grassroots:</h1>
          <div className="displayContainer">
            {this.props.campaignsList
              ? this.props.campaignsList.map((e, i) => {
                  return <img key={i} src={e.orglogo} />;
                })
              : null}
          </div>
        </TrustedOrgs>
      </PageContainer>
    );
  }
}

export default LandingPage;

const LoginButton = styled.button`
  padding: 2vh 1vw;
  border-radius: 6px;
  transition: all 0.3s;
  width: 80vw;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #dce8ef;
  background: #fdfdfd;
  color: #595c63;
  opacity: 1;

  &:hover {
    box-shadow: 1px 1px 3px grey;
    transition: 0.2s;
  }
  &:active {
    background: #1f83ff;
    color: #fdfdfd;
  }

  @media only screen and (min-width: 1224px) {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 5vh;
    opacity: 1;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      position: absolute;
      bottom: 0vh;
      left: 0;
      right: 0;
      background: #fdfdfd;
      color: #595c63;
      opacity: 1;
    }

    @media only screen and (min-width: 1224px) {
      position: absolute;
      bottom: 0;
    }
  }
`;
const HeroBackground = styled.div`
  display: flex;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: -1;

  & img {
    width: 70%;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and(orientation:portrait) {
    & img {
      position: fixed;
      top: 10vh;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    & img {
      position: fixed;
      top: 10vh;
      width: 60%;
    }
  }
  @media only screen and (min-width: 1224px) {
    & img {
      position: fixed;
      top: 10vh;
      width: 50vw;
    }
  }
`;

const Hero = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  width: 99%;
  position: absolute;
  top: 0vh;

  & h3:first-child {
    padding-top: 2vh;
  }

  & a:last-child {
    padding-top: 2vh;
  }

  & img {
    max-width: 60vw;
  }

  & p.long {
    display: none;
  }
  & p.short {
    padding: 0 0vw;
    width: 80vw;
  }
  /* Ipad, vertical */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    height: 70vh;
    position: absolute;
    top: 10vh;
    background: rgba(255, 255, 255, 0.7);

    & p.long {
      display: none;
    }
    & p.short {
      display: block;
      padding: 0 10vw;
    }
  }
  /* iPads (landscape) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    height: 80vh;
    position: absolute;
    top: 0;

    width: 80%;
    background: rgba(255, 255, 255, 0.7);
    justify-content: center;

    & p.short {
      display: none;
    }
    & p.long {
      display: block;
      padding: 0 10vw;
      margin: 0 0;
    }
  }

  /* Laptop */
  @media only screen and (min-width: 1224px) {
    width: 100vw;
    flex-direction: row;
    justify-content: center;
    height: 90vh;
    background: rgba(255, 255, 255, 0.7);

    & .desc-box {
      padding-top: 2vh;
      width: 35%;
      height: 50vh;
    }
    & img {
      max-height: 30vh;
    }
    & p.short {
      display: none;
    }

    & h3 {
    }
    & p.long {
      display: block;
      margin: 0 2.5vw;
    }
  }
`;
const TrustedOrgs = styled.div`
  border: 1px solid grey;
  border-top: none;
  border-bottom: none;
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  background: #fdfdfd;
  display: inline-block;
  height: 90vh;
  position: absolute;
  top: 180vh;

  & h1 {
    padding: 4vh 0;
    font-size: 1.5rem;
    font-weight: 400;
  }
  & img {
    max-height: 80px;
    max-width: 250px;
  }
  & img:last-child {
    margin-bottom: 2vh;
  }
  /* Ipad */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    &.TrustedOrgs {
      height: 80vh;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 150vh;
      padding-bottom: 60vh;
      background: white;
    }
  }
  /* iPads (landscape) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    &.TrustedOrgs {
      height: 100vh;
      position: absolute;
      top: 150vh;
      padding-top: 30vh;
      background: white;
      flex-direction: column;
      justify-content: space-between;
      background: white;

      & h1 {
        padding: 1vh 0;
      }
    }
  }
  /* Laptop  */
  @media only screen and (min-width: 1224px) {
    &.TrustedOrgs {
      height: 100vh;
    }
    &.displayContainer {
      height: 15vh;
      /* padding-top: 40vh; */
      bottom: 0;
      flex-direction: column;
      justify-content: space-between;
    }

    & h1 {
      padding: 40vh 0 0 0;
      font-family: "Oswald";
      font-weight: bold;
    }
    & img {
      margin: 0 2.5vw 1vh 2.5vw;
    }

    &.displayContainer {
      display: flex;
      flex-direction: row;
    }
  }
`;
