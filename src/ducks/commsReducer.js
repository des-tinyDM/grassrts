import axios from "axios";

const initialState = {
  contacts: [],
  isSubmitting: false,
  isLoading: false,
  commsList: [],
  commsRedux: []
};

const SUBMIT_NEW_CONTACT = "SUBMIT_NEW_CONTACT";
const GET_COMMS_DATA = "GET_COMMS_DATA";
const GET_ALL_CONTACTS = "GET_ALL_CONTACTS";
const GET_DATA_REDUX = "GET_DATA_REDUX";

export function submitNewContact(
  firstName,
  lastName,
  address,
  city,
  stateName,
  zip,
  phone,
  email,
  DOB
) {
  return {
    type: SUBMIT_NEW_CONTACT,
    payload: axios
      .post(`/api/campaign/submit_contact/`, {
        firstName,
        lastName,
        address,
        city,
        stateName,
        zip,
        phone,
        email,
        DOB
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}

export function getCommsData(campaign_id, type) {
  return {
    type: GET_COMMS_DATA,
    payload: axios
      .get(`/api/campaigns/data/${campaign_id}/${type}`)
      .then(response => response.data)
      .catch(err => console.log(err))
  };
}

export function getAllCampaignContacts(campaign_id) {
  return {
    type: GET_ALL_CONTACTS,
    payload: axios
      .get(`/api/${campaign_id}/contacts`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}
export function getDataRedux(campaign_id) {
  return {
    type: GET_DATA_REDUX,
    payload: axios
      .get(`/api/getDataRedux/${campaign_id}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}

export default function commsReducer(state = initialState, action) {
  //   console.log(action.type, action.payload);
  switch (action.type) {
    case `${SUBMIT_NEW_CONTACT}_PENDING`:
      return {
        ...state,
        isSubmitting: true
      };
    case `${SUBMIT_NEW_CONTACT}_FULFILLED`:
      return {
        ...state,
        contacts: action.payload.data
      };
    case `${GET_COMMS_DATA}_FULFILLED`:
      return {
        ...state,
        commsList: action.payload
      };
    case `${GET_ALL_CONTACTS}_FULFILLED`:
      return {
        ...state,
        contacts: action.payload
      };
    case `${GET_DATA_REDUX}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_DATA_REDUX}_FULFILLED`:
      return {
        ...state,
        commsRedux: action.payload
      };
    default:
      return state;
  }
}
