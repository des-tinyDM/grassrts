import axios from "axios";

const initialState = {
  events: []
};

const GET_EVENTS = "GET_EVENTS";

export function getEvents(campaign_id, scheduled, completed, user_id) {
  return {
    type: GET_EVENTS,
    payload: axios
      .get(
        `/api/events?campaign_id=${campaign_id}&scheduled=${scheduled}&completed=${completed}&user_id=${user_id}`
      )
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}

export default function eventsReducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_EVENTS}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });
    case `${GET_EVENTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        events: action.payload
      });
    default:
      return state;
  }
}
