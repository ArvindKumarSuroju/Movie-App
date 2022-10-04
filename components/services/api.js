import axios from "axios";
import qs from "qs";
import { BASE_URL } from "./api_config";
import { API_KEY } from "./api_config";

export const getMovies = async (MovieSelection) => {
  const url = `${BASE_URL}/movie/${MovieSelection}/?api_key=${API_KEY}&language=en-US&page=1`;

  //console.log(url);
  try {
    const response = await axios.get(url).catch(console.log);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTvShows = async (TVSelection) => {
  const url = `${BASE_URL}/tv/${TVSelection}/?api_key=${API_KEY}&language=en-US&page=1`;

  //console.log(url);
  try {
    const response = await axios.get(url);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearch = async (searchField, searchType) => {
  const url = `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&language=en-US&query=${searchField}&page=1&include_adult=false`;

  // console.log(url);
  try {
    const response = await axios.get(url);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
