import styled from "styled-components";
import heroImg from "../LoggedOut/LandingPage/heroImage.png";

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;

  & .contactsContainer {
    height: 30vh;
    overflow-y: scroll;
  }
  &#Campaigns {
    div.campaignList {
      position: absolute;
      top: 5vh;
      left: 0;
      width: 100vw;
      padding: 0 10vw;
      margin: none;
    }
  }
  &#Landing {
    height: 180vh;
    padding: 3vh 10vw 3vh 10vw;
    overflow: scroll;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    }
  }

  /* iPads (landscape) ----------- */
`;
