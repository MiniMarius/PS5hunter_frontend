import axios from "axios";
import { SET_AUTH } from "./types";
import {LOGOUT} from "./types";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post("your-api-endpoint/login", {
      username: username,
      password: password,
    });
    const { data } = response;
    dispatch(setAuth(data.token));
  } catch (error) {
    console.log(error);
  }
};

export const setAuth = (token) => {
  return {
    type: SET_AUTH,
    payload: token,
  };
};

export const checkAuth = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    if (auth.token) {
      // make a request to the server to verify token validity
      const response = await axios.post("/api/auth/token/verify/", {
        token: auth.token,
      });
      const { data } = response;
      if (data.success) {
        dispatch(setAuth(auth.token));
      } else {
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};