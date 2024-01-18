import axios from "axios";

const api = axios.create({ baseURL: "https://rocketmovies-api-7552.onrender.com/" })

export default api