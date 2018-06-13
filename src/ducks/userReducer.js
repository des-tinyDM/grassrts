import axios from "axios";

const GET_USER = "GET_USER";
const SUBMIT_PROFILE = "SUBMIT_PROFILE";
const ADD_NOTE = "ADD_NOTE";
const GET_NOTES = "GET_NOTES";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/me")
      .then(results => {
        return results.data;
      })
      .catch(err => console.log(err))
  };
}
export function submitProfile(
  firstName,
  lastName,
  profileImg,
  address,
  city,
  stateName,
  zip,
  phone,
  email,
  interests,
  bio,
  user_id
) {
  return {
    type: SUBMIT_PROFILE,
    payload: axios
      .put(`/api/submitprofile/${user_id}`, {
        firstName,
        lastName,
        profileImg,
        address,
        city,
        stateName,
        zip,
        phone,
        email,
        interests,
        bio
      })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => console.log(`submitProfile`, err))
  };
}

export function getNotes(user_id) {
  return {
    type: GET_NOTES,
    payload: axios.get(`/api/users/notes/${user_id}`).then(notes => {
      return notes.data;
      console.log(notes);
    })
  };
}
export function addNote(user_id, written_by, event_id, note) {
  return {
    type: GET_NOTES,
    payload: axios
      .post(`/api/users/notes`, { user_id, written_by, event_id, note })
      .then(notes => {
        return notes.data;
        console.log(notes);
      })
  };
}

const initialState = {
  user: {},
  notes: [],
  isLoading: false
};

export default function userReducer(state = initialState, action) {
  // console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
    case `${SUBMIT_PROFILE}_FULFILLED`:
      return {
        ...state,
        user: action.payload
      };
    case `${GET_USER}_REJECTED`:
    case `${SUBMIT_PROFILE}_REJECTED`:
      return {
        ...state,
        error: "ERROR"
      };
    case `${GET_NOTES}_PENDING`:
    case `${ADD_NOTE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_NOTES}_FULFILLED`:
    case `${ADD_NOTE}_FULFILLED`:
      return {
        ...state,
        notes: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
}
