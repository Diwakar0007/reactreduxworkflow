import axios from "axios";
import { FEATCH_POST, NEW_POST } from "./types";
export const getApiData = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: FEATCH_POST,
    payload: res.data,
  });
};

export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    formData,
    config
  );
  dispatch({
    type: NEW_POST,
    payload: res.data,
  });
};
