import api from '../api'

import { MovieDetailsParams } from '@/types/movieDetails/request'
import { MovieDetailsResponse } from '@/types/movieDetails/response'

export const getMovieDetails = async (
    params: MovieDetailsParams
): Promise<MovieDetailsResponse> => {
    const response = await api.get<MovieDetailsResponse>(
        `/movie/${params.movie_id}`
    )
    return response.data
}
