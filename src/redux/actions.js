import axios from "axios";
import { SET_AUTH } from "./types";

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