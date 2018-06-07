import axios from "axios";

const initialState = {
  events: [],
  pastEvents: [],
  futureEvents: []
};

const GET_EVENTS = "GET_EVENTS";
const GET_PAST = "GET_PAST";
const GET_FUTURE = "GET_FUTURE";

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
export function getPastEvents(campaign_id, user_id) {
  return {
    type: GET_PAST,
    payload: axios
      .get(`/api/events/past?user_id=${user_id}&campaign_id=${campaign_id}`)
      .then(pastEvents => {
        return pastEvents.data;
        console.log(pastEvents);
      })
      .catch(err => {
        console.log(`getting past events err`, err);
      })
  };
}
export function getFutureEvents(campaign_id, user_id) {
  return {
    type: GET_FUTURE,
    payload: axios
      .get(`/api/events/future?user_id=${user_id}&campaign_id=${campaign_id}`)
      .then(futureEvents => {
        return futureEvents.data;
        console.log(futureEvents);
      })
      .catch(err => {
        console.log(`getting future events err`, err);
      })
  };
}

export default function eventsReducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_EVENTS}_PENDING`:
    case `${GET_PAST}_PENDING`:
    case `${GET_FUTURE}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });
    case `${GET_EVENTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        events: action.payload
      });
    case `${GET_PAST}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        pastEvents: action.payload
      });
    case `${GET_FUTURE}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        futureEvents: action.payload
      });
    default:
      return state;
  }
}
