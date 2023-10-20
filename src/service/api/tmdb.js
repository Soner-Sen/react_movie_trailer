import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; 
const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}` 
  };

export const fetchDataFromAPI = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};