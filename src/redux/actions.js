import axios from "axios";
import { SET_AUTH, LOGOUT } from "./types";

export const setAuth = (token) => {
  console.log('Setting auth token:', token);
  return {
    type: SET_AUTH,
    payload: token,
  };
};

export const checkAuth = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    console.log('auth state:', auth);
    if (auth.token) {
      console.log('auth token exists, verifying...');
      // make a request to the server to verify token validity
      const response = await axios.post("/api/auth/token/verify/", {
        token: auth.token,
      });
      console.log('response:', response);
      if (response.status === 200) {
        console.log('token is valid');
        dispatch(setAuth(auth.token));
      } else {
        console.log('token is invalid');
        localStorage.removeItem("token");
        dispatch(logout());
      }
    } else {
      console.log('no auth token found');
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
