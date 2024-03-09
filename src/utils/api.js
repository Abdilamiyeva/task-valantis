import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.valantis.store:41000/',
    headers: {
      'Content-Type': 'application/json',
      "X-Auth":localStorage.getItem("token")
    }
  });
  