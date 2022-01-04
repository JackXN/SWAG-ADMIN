import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const BASE_URL='https://swagapi.herokuapp.com/api/'
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).users).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
