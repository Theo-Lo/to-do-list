import axios from "axios";

const api = axios.create({
    baseURL : "https://5fd06b961f23740016631893.mockapi.io/api/"
});

export default api;