import { SEARCH_IS_STARTED, SEARCH_IS_SUCCESS } from "../actions/actionsTypes";

const initialSearchState = {
  result: [],
};

export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case SEARCH_IS_STARTED:
      return state;

    case SEARCH_IS_SUCCESS:
      return {
        ...state,
        result: action.data,
      };

    default:
      return state;
  }
}
