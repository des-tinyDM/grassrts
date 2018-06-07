import axios from "axios";

const GET_CAMPAIGNS = "GET_CAMPAIGNS";
const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
const JOIN_CAMPAIGN = "JOIN_CAMPAIGN";
const GET_JOINED = "GET_JOINED";

const initialState = {
  campaignsList: [],
  isLoading: false,
  joined: {}
};

export function getAllCampaigns() {
  return {
    type: GET_CAMPAIGNS,
    payload: axios
      .get(`/api/campaigns`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => err)
  };
}

export function submitCampaign(
  name,
  organization,
  orglogo,
  description,
  type,
  scope,
  user_id
) {
  console.log(name, organization, orglogo, description, type, scope, user_id);
  return {
    type: CREATE_CAMPAIGN,
    payload: axios
      .post(`/api/campaigns/add`, {
        name,
        organization,
        orglogo,
        description,
        type,
        scope,
        user_id
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => err)
  };
}

export function joinCampaign(campaign_id, userid, role) {
  return {
    type: JOIN_CAMPAIGN,
    payload: axios
      .post(`/api/campaign/join/${campaign_id}`, { userid, role })
      .then(joined => joined.data)
      .catch(err => err)
  };
}
export function getJoinedCampaign(user_id) {
  return {
    type: GET_JOINED,
    payload: axios.get(`/api/campaigns/joined/${user_id}`)
  };
}

export default function campaignReducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_CAMPAIGNS}_PENDING`:
    case `${CREATE_CAMPAIGN}_PENDING`:
    case `${JOIN_CAMPAIGN}_PENDING`:
    case `${GET_JOINED}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

      return Object.assign({}, state, { isLoading: true });

    case `${GET_CAMPAIGNS}_FULFILLED`:
    case `${CREATE_CAMPAIGN}_FULFILLED`:
      // console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        campaignsList: action.payload
      });

    case `${JOIN_CAMPAIGN}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        joined: action.payload
      });

    case `${GET_JOINED}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        joined: action.payload.data[0]
      });
    default:
      return state;
  }
}
