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

export function createCampaign() {
  return {
    type: CREATE_CAMPAIGN,
    payload: axios
      .get(`/api/campaigns/add`)
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
    // case `${GET_EVENTS}_FULFILLED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     events: action.payload
    //   });
    // case `${GET_FUTURE_EVENTS}_FULFILLED`:
    //   return Object.assign({}, state, {
    //     futureEvents: action.payload
    //   });
    // case `${GET_NEWS}_FULFILLED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     news: action.payload
    //   });
    // case UPDATE_CAMPAIGN_NAME:
    //   return Object.assign({}, state, { name: action.payload });

    // case UPDATE_CAMPAIGN_DESCRIPTION:
    //   return Object.assign({}, state, { description: action.payload });

    // case UPDATE_CAMPAIGN_ORGANIZATION:
    //   return Object.assign({}, state, { organization: action.payload });

    // case UPDATE_CAMPAIGN_SCOPE:
    //   return Object.assign({}, state, { scope: action.payload });

    // case UPDATE_CAMPAIGN_TYPE:
    //   return Object.assign({}, state, { type: action.payload });

    // case UPDATE_CAMPAIGN_ORGLOGO:
    //   return Object.assign({}, state, { orglogo: action.payload });
    // case `${SUBMIT_CAMPAIGN}_PENDING`:
    // case `${SCHEDULE_USER_AS_VOL}_PENDING`:
    //   return Object.assign({}, state, { isSubmitting: true });
    // case `${SUBMIT_CAMPAIGN}_FULFILLED`:
    //   console.log(action);
    //   return Object.assign({}, state, {
    //     isSubmitting: false,
    //     campaigns: action.payload.data
    //   });

    // case `${CREATE_EVENT}_FULFILLED`:
    //   return Object.assign({}, state, { events: action.payload.data });
    // case `${UPDATE_CAMPAIGN_INFO}_FULFILLED`:
    //   return Object.assign({}, state, { campaigns: action.payload.data });
    // case `${GET_JOINED}_FULFILLED`:
    //   return Object.assign({}, state, { joined: action.payload });
    // case `${GET_SCHEDULED}_FULFILLED`:
    //   return Object.assign({}, state, { scheduled: action.payload });
    // case `${GET_USER_ROLE}_FULFILLED`:
    //   return Object.assign({}, state, { role: action.payload });
    // case `${SCHEDULE_USER_AS_VOL}_FULFILLED`:
    //   console.log(action, action.payload);
    //   return Object.assign({}, state, {
    //     isSubmitting: false,
    //     scheduled: action.payload
    //   });
    // case `${GET_VOLS_SCHEDULED}_FULFILLED`:
    //   console.log(action.type, action.payload);
    //   return Object.assign({}, state, {
    //     volsScheduled: action.payload
    //   });
    default:
      return state;
  }
}
