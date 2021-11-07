import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "API-KEY": "66a5795a47aa4d6747afca2de4294f86",
  },
});

export const Movie = {
  getMovie() {
    return instance
      .get(`movie/550?api_key=66a5795a47aa4d6747afca2de4294f86`)
      .then((response) => response.json());
  },
 
};
