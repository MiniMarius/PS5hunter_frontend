import { SET_AUTH } from "../redux/types";

const initialState = {
  token: localStorage.getItem("token") || null, // get token from local storage or set to null
  isAuthenticated: !!localStorage.getItem("token"), // set isAuthenticated to true if token exists in localStorage
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      localStorage.setItem("token", action.payload); // store token in local storage
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true, // set isAuthenticated to true when token is set
      };
    default:
      return state;
  }
};

export default authReducer;