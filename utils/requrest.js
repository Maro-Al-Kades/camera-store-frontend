import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_REST_API_KEY,
  },
});
