import axois from "axios";

import { Question_IS_SUCCESS } from "./actionsTypes";

export function questionIsSuccess(data) {
  return {
    type: Question_IS_SUCCESS,
    data,
  };
}

const s = axois.create({
  baseURL:'http://api.stackexchange.com/2.2'
})

export default function question(text) {
  return async (dispatch) => {
    const url = `/questions?order=desc&sort=activity&site=stackoverflow`;
    console.log(url);
    const responce = await s.get(url);

    console.log(responce.data.items);

    dispatch(questionIsSuccess(responce.data.items));
  };
}
