const API_URL = "https://covidnigeria.herokuapp.com/api";

export const getCovidData = async () => {
  try {
    const dataResponse = await (await fetch(API_URL)).json();
    return dataResponse;
  } catch (error) {
    return ({
      error: error.message
    });
  }
}