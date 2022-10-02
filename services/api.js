import axios from 'axios';
import qs from 'qs';
import { BASE_URL } from './api_config';


export const getMovies = async (query) => {
    // const url = `${BASE_URL}/search/movie?${qs.stringify(query)}`;
    const url = BASE_URL;

    try{
        const response = await axios.get(url);
        return response.data;
    }
    catch(error){
        console.log(error);
    }

}
