import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS
} from "../constants/covid";

const initialState = {
  loading: true,
  error: "",
  covidData: null
}

const covidReducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error:""
      }

    case FETCH_DATA_SUCCESS:
      return {
        covidData: action.payload,
        loading: false,
        error:""
      }

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return {
        ...state
      }
  }
}

export default covidReducer;