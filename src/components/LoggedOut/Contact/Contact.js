import React from "react";
import styled from "styled-components";

const ContactItem = styled.div`
  display: flex;
  font-size: 1em;
  margin: 2vh 5vw;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  max-height: 10vh;

  & p {
    width: 60vw;
    /* border: 1px solid red; */
  }
  & div.icon {
    width: 10vw;
    margin-left: 10vw;
    padding-right: 10vw;
  }
`;

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    align-self: center;
    border-bottom: 1px solid grey;
  }
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <h1>Contact Information</h1>
      <ContactItem>
        <h2>Destiny Ross</h2>
      </ContactItem>

      <ContactItem>
        <div
          className="icon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <i class="fas fa-mobile-alt" style={{ fontSize: "2em" }} />
        </div>
        <p>330-785-5800</p>
      </ContactItem>
      <ContactItem>
        <div
          className="icon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <i class="far fa-envelope" style={{ fontSize: "2em" }} />
        </div>
        <p>destinyleaross@gmail.com</p>
      </ContactItem>
      <ContactItem>
        <div
          className="icon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <i class="fas fa-laptop" style={{ fontSize: "2em" }} />
        </div>
        <a>
          <p>http://www.destinylross.com</p>
        </a>
      </ContactItem>
      <ContactItem>
        <div
          className="icon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <i class="fas fa-map-marker-alt" style={{ fontSize: "2em" }} />
        </div>
        <div>
          <p>500 S Ervay St</p>
          <p>Dallas, Tx</p>
          <p>75201</p>
        </div>
      </ContactItem>
    </ContactPageContainer>
  );
};

export default ContactPage;
