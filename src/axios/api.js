import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '8b447e45c521b61c20b167f7f8a371ce',
    },
})

export default api;