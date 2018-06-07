import styled from "styled-components";
import heroImg from "../LoggedOut/LandingPage/heroImage.png";

export const PageContainer = styled.div`
  width: 100vw;
  /* padding: 5vh 10vw; */

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;

  &#Landing {
    height: 180vh;
    /* position: relative; */
    padding: 3vh 10vw 3vh 10vw;
    overflow: scroll;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    }
  }

  /* iPads (landscape) ----------- */
`;
