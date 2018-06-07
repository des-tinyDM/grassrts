import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { addContact } from "../../../ducks/dataReducer";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      stateName: "",
      zip: "",
      phone: "",
      email: "",
      dateofbirth: "",
      allows_contact: true
    };
  }

  contactInput = e => {
    e.target.type === "checkbox"
      ? this.setState({ [e.target.name]: e.target.checked })
      : this.setState({ [e.target.name]: e.target.value });
  };

  submitContact = e => {
    let {
      firstName,
      lastName,
      address,
      city,
      stateName,
      zip,
      phone,
      email,
      dateofbirth,
      allowsContact,
      event_id
    } = this.state;
    let { user_id } = this.props.user;

    e.preventDefault();
    console.log({ ...this.state, user_id, event_id });
  };

  render() {
    console.log(this.props);
    let { isLoading } = this.props;

    let { pastEvents } = this.props;
    let eventsDropdown = pastEvents.map((e, i) => {
      return (
        <option value={e.event_id}>
          {e.event_name} - {e.starttime}
        </option>
      );
    });

    return (
      <div>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <AddContactForm onSubmit={e => this.submitContact(e)}>
            <h1>Add New Contact</h1>
            <p>First Name</p>
            <select
              name="event_id"
              value={this.state.event_id}
              className="event_id"
              onChange={this.campaignInput}
              size="3"
            >
              this.props.pastEvents
              <option value="National">National</option>
              <option value="Statewide">Statewide</option>
              <option value="Local">Local</option>
            </select>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.contactInput}
            />
            <p>Last Name</p>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.contactInput}
            />
            <p>Address</p>
            <input
              name="address"
              value={this.state.address}
              onChange={this.contactInput}
            />
            <p>City</p>
            <input
              name="city"
              value={this.state.city}
              onChange={this.contactInput}
            />
            <p>State</p>
            <input
              name="stateName"
              value={this.state.stateName}
              onChange={this.contactInput}
            />
            <p>Zipcode</p>
            <input
              name="zip"
              value={this.state.zip}
              onChange={this.contactInput}
            />
            <p>Phone</p>
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.contactInput}
              type="tel"
            />
            <p>Email</p>
            <input
              name="email"
              value={this.state.email}
              onChange={this.contactInput}
              type="email"
            />
            <p>Date of Birth</p>
            <input
              name="dateofbirth"
              value={this.state.dateofbirth}
              onChange={this.contactInput}
              type="date"
            />
            <p>Allows Contact</p>
            <input
              type="checkbox"
              checked={this.state.allows_contact}
              onChange={this.contactInput}
              name="allows_contact"
            />
            <input type="submit" value="Add Contact" />
            {eventsDropdown}
          </AddContactForm>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.dataReducer.contacts,
    user: state.userReducer.user,
    events: state.eventsReducer.events,
    pastEvents: state.eventsReducer.events
  };
};

export default connect(
  mapStateToProps,
  { addContact }
)(ContactForm);

const AddContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 1vh 5vw; */
  overflow-y: scroll;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & input {
    border: 1px solid grey;
    width: 80vw;
    height: 4vh;
    margin: 0vh 0 0 0;
    text-align: center;
    outline: none;
    border-radius: 4px;
    line-height: 14px;
    font-size: 14px;
  }
`;
