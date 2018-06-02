import axios from "axios";

const GET_USER = "GET_USER";
const SUBMIT_PROFILE = "SUBMIT_PROFILE";

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
const initialState = {
  user: {}
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

    default:
      return state;
  }
}
