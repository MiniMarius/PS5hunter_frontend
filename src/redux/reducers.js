import { SET_AUTH, LOGOUT } from "../redux/types";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      localStorage.removeItem("token"); // remove token from local storage
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default authReducer;
