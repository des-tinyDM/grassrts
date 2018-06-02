import React from "react";
import styled from "styled-components";

const TechCard = styled.div`
  padding: 1vh 0;
  margin: 1vh 2vw;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;

  & img {
    max-height: 150px;
    margin-top: 2vh;
  }
  & p {
    text-align: center;
  }
`;

const Tech = () => {
  return (
    <div>
      <h1 style={{ alignSelf: "center", textAlign: "center" }}>
        Technology Used
      </h1>
      <TechCard className="react tech-card">
        <img
          className="react-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        />
        <h2 className="tech-title">React</h2>
        <p className="tech-description">
          React is a popular javascript library. It's declarative syntax,
          component-based architecture, and unidirectional data flow make it a
          top performer.
        </p>
      </TechCard>
      <TechCard className="tech-card redux">
        <img
          className="redux-icon"
          src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
        />
        <h2 className="tech-title"> Redux</h2>
        <p className="tech-description">
          Redux is a state management tool, used to circumvent the need to pass
          props down through multiple components.
        </p>
      </TechCard>
      <TechCard className="tech-card postgres">
        <img
          className="postgresql-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png"
        />
        <h2 className="tech-title">PostgreSQL</h2>
        <p className="tech-description">
          PostgreSQL is a powerful, open source object-relational database
          system with over 30 years of active development that has earned it a
          strong reputation for reliability, feature robustness, and
          performance.
        </p>
      </TechCard>
      <TechCard className="tech-card node">
        <img
          className="node-icon"
          src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
        />
        <h2 className="tech-title">Node</h2>
        <p className="tech-description">
          Node is a Javascript runtime built on Chrome's V8 Javascript engine.
          Node.js uses an event-driven, non-blocking I/O model that makes it
          lightweight and efficient. Node.js' package ecosystem, npm, is the
          largest ecosystem of open source libraries in the world.
        </p>
        <a
          href="https://momentjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Go to Docs</button>
        </a>
      </TechCard>
      <TechCard className="tech-card moment">
        <img
          className="node-icon"
          src="https://www.wappalyzer.com/images/icons/Moment.js.svg"
          target="_blank"
          rel="noopener noreferrer"
          alt="The NodeJS logo. A green"
        />
        <h2 className="tech-title">MomentJS</h2>
        <p className="tech-description">
          MomentJS is a lightweight library designed to parse, validate,
          manupulate, and display dates and times in Javascript.
        </p>
        <a
          href="https://momentjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Go to Docs</button>
        </a>
      </TechCard>
    </div>
  );
};

export default Tech;
