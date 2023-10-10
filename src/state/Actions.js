import state from "./initialState.json"
import { store } from "./Store";

export const LOADER_ACTIVE = "LOADER_ACTIVE"
export const STATE_CHANGE = "STATE_CHANGE"


export const getStateDispatch = (context) => {
  const globalState = context(store);
  return globalState
};


export const stateChange = (reducerKey,key, value) => {
  return {
    type: STATE_CHANGE,
    reducerKey,
    key,
    value,
  };
};


