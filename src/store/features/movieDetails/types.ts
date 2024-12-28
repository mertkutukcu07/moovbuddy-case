import { MovieDetailsParams } from '@/types/movieDetails/request'
import { MovieDetailsResponse } from '@/types/movieDetails/response'

export interface MovieDetailsState {
    data: MovieDetailsResponse | null
    loading: boolean
    error: string | null
}

export type FetchMovieDetailsPayload = MovieDetailsParams
