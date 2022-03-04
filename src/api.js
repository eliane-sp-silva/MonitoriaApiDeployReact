import axios from "axios";

const api = axios.create({
    baseURL: "https://deploymonitoriaapi.herokuapp.com/"
})

export default api