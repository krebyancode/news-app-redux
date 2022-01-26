import { SET_LOADING_TRUE, SET_LOADING_FALSE } from "../types/loadingTypes";

const initialState = {
  loading: false,
};

export const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
