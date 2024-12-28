import axios from 'axios'

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
        accept: 'application/json',
    },
})

export default api
