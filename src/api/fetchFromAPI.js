import react from "react";  
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

export const fetchFromAPI = async (url) => {
  const { data } = await api.get(url);
  return data;
};
console.log(import.meta.env.VITE_RAPID_API_KEY);