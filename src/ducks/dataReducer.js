import axios from "axios";

const initialState = {
  volList: [],
  isLoading: [],
  getContacts: [],
  chartData: [],
  userChart: []
};

const GET_VOLS = "GET_VOLS";
const GET_CONTACTS = "GET_CONTACTS";
const GET_CHART = "GET_CHART";
const USER_CHART = "USER_CHART";

export function getVols(campaign_id, event_id) {
  return {
    type: "GET_VOLS",
    payload: axios
      .get(
        `/api/data/volunteers?campaign_id=${campaign_id}&event_id=${event_id}`
      )
      .then(volList => {
        console.log(`getting vols:`, volList);
        return volList.data;
      })
      .catch(err => {
        console.log(err);
      })
  };
}
export function getContacts(campaign_id, event_id) {
  return {
    type: "GET_CONTACTS",
    payload: axios
      .get(`/api/data/contacts/${campaign_id}?event_id=${event_id}`)
      .then(contacts => {
        console.log(`getting contacts:`, contacts);
        return contacts.data;
      })
      .catch(err => {
        console.log(err);
      })
  };
}
export function getChartData(campaign_id, event_id, user_id, outcome) {
  return {
    type: "LOAD_CHART",
    payload: axios
      .get(
        `/api/chart/data?campaign_id=${campaign_id}&event_id=${event_id}&user_id=${user_id}&outcome=${outcome}`
      )
      .then(response => {
        return response.data;
        console.log(`loading Chart:`, response);
      })
  };
}

export function getUserChart(user_id) {
  return {
    type: "USER_CHART",
    payload: axios.get(`/api/chart/data?user_id=${user_id}`).then(response => {
      console.log(`getting user chart`, response);
      return response.data;
    })
  };
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_VOLS}_PENDING`:
    case `${GET_CONTACTS}_PENDING`:
    case `${GET_CHART}_PENDING`:
    case `${USER_CHART}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_VOLS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        volList: action.payload
      });
    case `${GET_CONTACTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        contacts: action.payload
      });
    case `${GET_CHART}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        chartData: action.payload
      });
    case `${USER_CHART}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userChart: action.payload
      });
    default:
      return state;
  }
}
