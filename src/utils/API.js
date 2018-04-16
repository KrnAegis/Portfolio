import axios from "axios";
const BASEURL = "https://api.giphy.com/v1/gifs/search?=&q=";
const APIKEY = "&limit=20&api_key=1073d1edd04f4e6bac1f9f8bf6600603";


 export function search(query) {
    return axios.get(BASEURL + query + APIKEY);
  };

