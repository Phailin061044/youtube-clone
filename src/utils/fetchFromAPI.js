import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": `13f2194d29mshcb110a35e5739fdp1d0600jsn83880ecd86d6`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
    
}