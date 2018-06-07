import React, { Component } from "react";
import { PageContainer } from "../../styled/PageContainer";

import ContactForm from "./ContactForm";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showAddContact: false };
  }
  render() {
    return (
      <PageContainer>
        <button
          onClick={() =>
            this.setState({ showAddContact: !this.state.showAddContact })
          }
        >
          Add New Contact
        </button>
        {this.state.showAddContact ? (
          <ContactForm />
        ) : (
          <div
            style={{
              width: "inherit",
              height: "inherit",
              background: "aliceblue"
            }}
          />
        )}
      </PageContainer>
    );
  }
}

export default ContactPage;
