import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../styled/PageContainer";

const LandingPage = props => {
  return (
    <PageContainer>
      <div className="desc-box">
        <h3>Create Events</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vulputate vestibulum metus, nec egestas turpis vehicula dictum. In
          bibendum suscipit erat eget egestas. Etiam volutpat nisl porttitor
          augue scelerisque convallis. Sed consequat nulla vehicula facilisis
          molestie. Nam cursus ligula diam, in tincidunt leo semper sodales.
          Curabitur finibus erat ac quam scelerisque, non malesuada massa
          dignissim. Suspendisse ut sagittis tortor. Curabitur a ullamcorper
          erat.
        </p>
      </div>
      <div className="desc-box">
        <h3>Manage Volunteers</h3>
        <p>
          Praesent sodales lectus id urna consequat hendrerit. Curabitur et
          imperdiet ligula. Proin quis dignissim lectus. Cras rhoncus nec magna
          ac placerat. Nam ornare elit eu ligula faucibus viverra. Phasellus
          eget imperdiet eros.
        </p>
      </div>
      <div className="desc-box">
        <h3>Track Campaign</h3>
        <p>
          Praesent porttitor varius nisi vel hendrerit. Donec vitae ante at nisi
          accumsan pretium. Integer convallis molestie luctus. Praesent et
          laoreet lacus. Duis blandit ligula vel ex euismod, ac dignissim quam
          mollis. Vestibulum fermentum, neque eget ullamcorper ornare, ipsum
          velit eleifend risus, et gravida felis sem in tellus. In non
          pellentesque sem. Phasellus pulvinar justo eu diam luctus maximus a ac
          lorem.
        </p>
      </div>

      <a href={process.env.REACT_APP_LOGIN}>
        <LoginButton id="landing-btn">JOIN OR VOLUNTEER</LoginButton>
      </a>
    </PageContainer>
  );
};

export default LandingPage;

const LoginButton = styled.button`
  padding: 2vh 2vw;
  background: white;
  border-radius: 6px;
  transition: all 0.3s;
  width: 180px;
  border-radius: 6px;
  outline: none;
  margin-bottom: 18px;
  font-size: 0.75em;
  border: solid 1px #dce8ef;
  color: #595c63;

  &:hover {
    box-shadow: 1px 1px 3px #dee9f9;
    transition: 0.2s;
  }
  &:active {
    background: #1f83ff;
    color: white;
  }
`;
