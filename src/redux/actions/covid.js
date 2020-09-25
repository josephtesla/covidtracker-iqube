import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS
} from "../constants/covid";
import { getCovidData } from "../../api/api";

const action = (type, payload) => ({ type, payload})

export const fetchCovidData = () => async (dispatch) => {
  dispatch(action(FETCH_DATA_REQUEST, null))
  const response = await getCovidData();
  if (!response.error){
    dispatch(action(FETCH_DATA_SUCCESS, response))
    return;
  }
  dispatch(action(FETCH_DATA_FAILURE, response))
  return response;
}