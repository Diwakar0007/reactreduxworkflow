import { FEATCH_POST, NEW_POST } from "../actions/types";
const initialState = {
  posts: [],
  item: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FEATCH_POST:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case NEW_POST:
      return {
        ...state,
        loading: false,
        item: payload,
      };
    default:
      return state;
  }
}
