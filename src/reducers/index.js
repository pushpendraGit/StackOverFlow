import { combineReducers } from "redux";

import search from "./search";
import question from "./question";

export default combineReducers({
  search,
  question,
});
