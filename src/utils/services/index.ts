import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_API ||
    "https://hashtags-n-mentions.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
  timeout: 1000 * 5 // Wait for request to complete in 5 seconds
});

export default service;
