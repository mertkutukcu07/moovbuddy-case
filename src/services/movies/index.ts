import api from '../api'

import { MoviesParams } from '@/types/movies/request'
import { Movies } from '@/types/movies/response'

export const getMovies = async (params: MoviesParams): Promise<Movies> => {
    const endpoint = params.query
        ? `/search/movie?query=${params.query}&language=${params.language}&page=${params.page}`
        : `/movie/popular?language=${params.language}&page=${params.page}`

    const response = await api.get<Movies>(endpoint)
    return response.data
}
