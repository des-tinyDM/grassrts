import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import campaignReducer from "./campaignReducer";
import userReducer from "./userReducer";
import commsReducer from "./commsReducer";
import eventsReducer from "./eventsReducer";
import dataReducer from "./dataReducer";

const store = createStore(
  combineReducers({
    userReducer,
    campaignReducer,
    commsReducer,
    eventsReducer,
    dataReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
