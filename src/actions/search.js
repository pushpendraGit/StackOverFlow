import axois from 'axios';
import { SEARCH_IS_STARTED, SEARCH_IS_SUCCESS, SEARCH_IS_FAIELD } from "./actionsTypes";

export function searchIsStated(){
    return{
    type:SEARCH_IS_STARTED
    }
}

export function searchIsSuccess(data){
    return{
    type:SEARCH_IS_SUCCESS,
    data
    }
}


export function searchIsFailed(err){
    return {
    type:SEARCH_IS_FAIELD,
    err
    }


}


const s = axois.create({
  baseURL:'http://api.stackexchange.com/2.2'
})





export default function search(text) {
  return async (dispatch) => {
    dispatch(searchIsStated);
    const url = `/search/advanced?order=desc&sort=activity&q=${text}&site=stackoverflow`
    console.log(url);
    const responce = await s.get(url);

    console.log(responce.data.items)

    dispatch(searchIsSuccess(responce.data.items))
  };
}


export  function searchWithTag(text) {
  return async (dispatch) => {
    dispatch(searchIsStated);
    const url = `/search/advanced?order=desc&sort=activity&tagged=${text}&site=stackoverflow`
    console.log(url);
    const responce = await s.get(url);

    console.log(responce.data.items)

    dispatch(searchIsSuccess(responce.data.items))
  };
}



