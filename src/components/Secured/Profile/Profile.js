import React, { Component } from "react";
import styled from "styled-components";

import { submitProfile, getUser } from "../../../ducks/userReducer";

import { connect } from "react-redux";

const ProfileHeader = styled.div`
  /* padding: 5vh 5vw; */

  background: #003459;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 7vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 23vh;
  z-index: 5;

  & div {
    /* position: absolute; */
    /* width: 55vw; */
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & img {
    height: 25vh;
    border-radius: 50%;
    position: absolute;
    top: 10vh;
    z-index: 1000;
    border: 2px solid white;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.3);
    /* left: 15vw; */
  }

  & h1 {
    margin-top: 3vh;
    align-self: flex-start;
    color: #fdfdfd;
    font-size: 2em;
    width: 100vw;
    text-align: center;
  }

  & p {
    color: #212121;
  }
`;

const ContactContainer = styled.div`
  position: absolute;
  top: 21vh;
  left: 0;
  padding-bottom: 10vh;
  background: #fdfdfd;
  color: black;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 38vh;

  & h1 {
    margin-top: 20vh;
    margin-bottom: 1vh;
  }
`;

const BioContainer = styled.div`
  background: #fdfdfd;
  position: absolute;
  left: 0;
  /* bottom: 0; */
  width: 100vw;
  top: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 10vw 5vh 10vw;

  & h1 {
    /* margin-top: 3vh; */
    color: black;
    font-size: 2rem;
    margin-bottom: 1vh;
  }
  & p {
    color: black;
    text-align: center;
  }
  @media only screen and (min-width: 1224px) {
    &:after {
      content: "";
      width: 60vw;
      height: 1px;
      background: gray;
      position: absolute;
      bottom: -1px;
      left: 20vw;
    }

    &:before {
      content: "";
      width: 60vw;
      height: 1px;
      background: gray;
      position: absolute;
      top: 1px;
      left: 20vw;
    }
  }
`;

const SubmitButton = styled.input`
  padding: 2vh 1vw;
  border-radius: 6px;
  transition: all 0.3s;
  width: 80vw;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #dce8ef;
  color: #595c63;

  &:hover {
    box-shadow: 1px 1px 3px #dee9f9;
    transition: 0.2s;
  }
  &:active {
    background: #1f83ff;
    color: #fdfdfd;
  }
`;

const CancelButton = styled.input`
  width: 5vw;
  padding: 2vh 5vw;
  border-radius: 6px;
  transition: all 0.3s;
  position: fixed;
  /* top: 20vh; */
  left: 0;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #dce8ef;
  color: #595c63;
  background: #fdfdfd;

  &:hover {
    box-shadow: 1px 1px 3px #fdfdfd;
    transition: 0.2s;
  }
  &:active {
    background: #1f83ff;
    color: #fdfdfd;
  }
`;

const EditButton = styled.button`
  padding: 2vh 5vw;
  border-radius: 6px;
  transition: all 0.3s;
  position: absolute;
  top: 20vh;
  right: 4vw;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #dce8ef;
  color: #595c63;
  background: #fdfdfd;

  &:hover {
    box-shadow: 1px 1px 3px #fdfdfd;
    transition: 0.2s;
  }
  &:active {
    background: #1f83ff;
    color: #fdfdfd;
  }
`;

const ProfileContainer = styled.div`
  width: 100vw;
  overflow-y: scroll;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isTop: true,
      firstName: "",
      lastName: "",
      profilePic: "",
      address: "",
      city: "",
      stateName: "",
      zip: "",
      phone: "",
      email: "",
      interests: "",
      bio: ""
    };
    this.profileInput = this.profileInput.bind(this);
  }

  editSwitch = e => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  profileInput(e) {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  clearForm = e => {
    this.setState({
      firstName: "",
      lastName: "",
      profilePic: "",
      address: "",
      city: "",
      stateName: "",
      zip: "",
      phone: "",
      email: "",
      interests: "",
      bio: ""
    });
  };
  submitProfileForm = e => {
    let {
      firstName,
      lastName,
      profilePic,
      address,
      city,
      stateName,
      zip,
      phone,
      email,
      interests,
      bio
    } = this.state;
    e.preventDefault();
    this.props
      .submitProfile(
        firstName || this.props.user.first_name,
        lastName || this.props.user.last_name,
        profilePic || this.props.user.profile_img,
        address || this.props.user.address,
        city || this.props.user.city,
        stateName || this.props.user.state,
        zip || this.props.user.zip,
        phone || this.props.user.phone,
        email || this.props.user.email,
        interests || this.props.user.interests,
        bio || this.props.user.bio,
        this.props.user.user_id
      )
      .then(
        this.setState(
          {
            isEditing: false,
            firstName: "",
            lastName: "",
            profilePic: "",
            address: "",
            city: "",
            stateName: "",
            zip: "",
            phone: "",
            email: "",
            interests: "",
            bio: ""
          },
          () => this.props.getUser()
        )
      )
      .catch(console.log());
  };
  componentDidMount() {
    !this.props.user.interests ? this.setState({ isEditing: true }) : null;
  }
  render() {
    console.log(`profilepage`, this.props);
    return (
      <ProfileContainer>
        {this.props.user ? (
          <div>
            <ProfileHeader>
              <img
                src={this.state.profilePic || this.props.user.profile_img}
                onError={e => {
                  e.target.src =
                    "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
                }}
              />
              />
              <h1>
                {this.props.user.first_name} {this.props.user.last_name}
              </h1>
              <EditButton onClick={e => this.editSwitch(e)}>Edit</EditButton>
            </ProfileHeader>
            {!this.state.isEditing && (
              <div>
                <ContactContainer>
                  <h1>Contact Information:</h1>
                  <p>{this.props.user.address}</p>
                  <p>
                    {this.props.user.city}, {this.props.user.state}{" "}
                    {this.props.user.zip}
                  </p>
                  <br />
                  <p>{this.props.user.email}</p>
                  <p>{this.props.user.phone}</p>
                </ContactContainer>
                <BioContainer>
                  <h1>Profile:</h1>
                  <p>Interests: {this.props.user.interests}</p>
                  <br />
                  <p>Biography: {this.props.user.bio}</p>
                </BioContainer>
              </div>
            )}
          </div>
        ) : null}

        <ProfileForm id="profileForm" onSubmit={e => this.submitProfileForm(e)}>
          {this.state.isEditing && (
            <CancelButton onClick={e => this.clearForm(e)} value="Reset" />
          )}
          {this.state.isEditing && (
            <ProfileInputSection>
              <h2>Name:</h2>
              <div>
                {!this.props.user.first_name || this.state.isEditing ? (
                  <input
                    autoFocus
                    onChange={this.profileInput}
                    name="firstName"
                    placeholder={this.props.user.first_name || "First Name"}
                    title="Your first name, or a preferred address. Please be sure to use real information, to make it easier for your campaign staff."
                    value={this.state.firstName}
                  />
                ) : null}
                {!this.props.user.last_name || this.state.isEditing ? (
                  <input
                    onChange={this.profileInput}
                    name="lastName"
                    placeholder={this.props.user.last_name || "Last Name"}
                    title="Your last name, or a preferred address. Please be sure to use real information, to make it easier for your campaign staff."
                    value={this.state.lastName}
                  />
                ) : null}
              </div>
            </ProfileInputSection>
          )}

          {!this.props.user.profile_img || this.state.isEditing ? (
            <ProfileInputSection>
              <h2>Profile Picture:</h2>
              <input
                className="wholeRow"
                onChange={this.profileInput}
                name="profilePic"
                title="A link to your hosted picture. Please be sure to use a real image, so campaign staff can identify you when you show up to volunteer! We like being able to connect faces to their names."
                placeholder={this.props.user.profile_img || "Profile Picture"}
                value={this.state.profilePic}
              />
            </ProfileInputSection>
          ) : null}

          <ProfileInputSection>
            {this.state.isEditing && <h2>Address:</h2>}
            {!this.props.user.address || this.state.isEditing ? (
              <input
                className="wholeRow"
                onChange={this.profileInput}
                name="address"
                placeholder={this.props.user.address || "Address"}
                value={this.state.address}
              />
            ) : null}
            <div>
              {!this.props.user.city || this.state.isEditing ? (
                <input
                  onChange={this.profileInput}
                  name="city"
                  placeholder={this.props.user.city || "City"}
                  value={this.state.city}
                />
              ) : null}
              {!this.props.user.state || this.state.isEditing ? (
                <input
                  onChange={this.profileInput}
                  name="stateName"
                  placeholder={this.props.user.state || "State"}
                  value={this.state.state}
                  title="State abbreviation, e.g. : OH"
                />
              ) : null}
            </div>

            {!this.props.user.zip || this.state.isEditing ? (
              <input
                className="wholeRow"
                onChange={this.profileInput}
                name="zip"
                placeholder={this.props.user.zip || "Zipcode"}
                value={this.state.zip}
              />
            ) : null}
          </ProfileInputSection>
          <ProfileInputSection>
            {!this.props.user.phone || this.state.isEditing ? (
              <input
                className="wholeRow"
                onChange={this.profileInput}
                name="phone"
                placeholder={this.props.user.phone || "Phone"}
                value={this.state.phone}
              />
            ) : null}
            {!this.props.user.email || this.state.isEditing ? (
              <input
                className="wholeRow"
                onChange={this.profileInput}
                name="email"
                placeholder={this.props.user.email || "Email"}
                value={this.state.email}
                title="Please add a valid email, so campaign staff can easily contact you and communicate."
              />
            ) : null}
          </ProfileInputSection>
          {this.state.isEditing || !this.props.user.interests ? (
            <ProfileInputSection>
              <h2>About Me:</h2>
              {!this.props.user.interests || this.state.isEditing ? (
                <input
                  className="wholeRow"
                  onChange={this.profileInput}
                  name="interests"
                  placeholder={this.props.user.interests || "Interests"}
                  value={this.state.interests}
                  title="Have you volunteered before, with another organization working with the public? Do you have any unique skills you think could help during canvassing, phonebanking, or social events? List those here."
                />
              ) : null}
              {!this.props.user.bio || this.state.isEditing ? (
                <textarea
                  onChange={this.profileInput}
                  name="bio"
                  title="Tell us a little bit about yourself. Your campaign staff will love to get to know you and learn about your past experiences and motivations!"
                  placeholder={this.props.user.bio || "Bio"}
                  value={this.state.bio}
                />
              ) : null}

              <SubmitButton type="submit" className="wholeRow" />
            </ProfileInputSection>
          ) : null}
        </ProfileForm>
      </ProfileContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps, { submitProfile, getUser })(Profile);

const ProfileForm = styled.form`
  position: absolute;
  top: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const ProfileInputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80vw;
  margin: 0 10vw;
  text-align: center;

  & h2 {
    width: 80vw;
    margin-top: 2vh;
    margin-bottom: 1vh;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }

  & input {
    height: 4vh;
    width: 37vw;
    border: 1px solid grey;
    margin: 1vh 0;
    text-align: center;
    outline: none;
  }
  & input.wholeRow {
    width: 80vw;
  }
  & textarea {
    border: 1px solid grey;
    height: 20vh;
    margin-bottom: 5vh;
    text-align: center;
    padding: 2vh 5vw;
    outline: none;
  }
  & input,
  textarea {
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #dddddd;
  }
  & input:focus,
  textarea:focus {
    box-shadow: 0 0 5px #003459;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #003459;
  }
`;
