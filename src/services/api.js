import axios from "axios";

const api = axios.create({
  // baseURL: "https://json-server-barberstone.herokuapp.com/",
  baseURL: "localhost:3001",
});

export default api;
