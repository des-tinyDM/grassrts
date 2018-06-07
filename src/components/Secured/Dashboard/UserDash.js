import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

import UserChart from "./UserChart";
import { PageContainer } from "../../styled/PageContainer";

const DashText = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserDash = props => {
  // console.log(`look here`, props);
  return (
    <PageContainer>
      <h1>Dashboard</h1>
      {!props.user.email ? (
        <DashText>
          <h3>
            Hey, {props.user.first_name}! It's your first time logging in, so
            your profile is incomplete. Head on over to{" "}
            <Link to="/profile">Your Profile</Link> to fill out some
            information! It will really help your campaign staff out.
          </h3>
          <Link to="/profile">
            <button>PROFILE</button>
          </Link>
        </DashText>
      ) : (
        <h3>Hey, {props.user.first_name}!</h3>
      )}

      {props.joined ? (
        <div>
          <h2>
            {props.joined.name} {props.joined.role}
          </h2>
        </div>
      ) : (
        <DashText>
          <h2>
            You're not in any campaigns. Start volunteering with a
            <Link to="/campaigns"> campaign </Link> by searching for one you
            near!
          </h2>
        </DashText>
      )}

      {/* {this.props.joined.role === "Admin" ? <h1>Admin</h1> : <h1>Volunteer</h1>} */}
    </PageContainer>
  );
};

export default UserDash;
