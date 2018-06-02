import React from "react";
import moment from "moment";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const EventCard = props => {
  return (
    <div>
      <h1>{props.event_name}</h1>
      <p>
        {moment(props.start, moment.ISO_8601).format(
          "dddd, MMMM Do YYYY, h:mm:ss a"
        )}
      </p>
      <Link to={`/events/${props.event_id}`}>
        <button>View Event Page</button>
      </Link>
    </div>
  );
};
