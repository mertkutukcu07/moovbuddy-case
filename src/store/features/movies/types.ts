import { MoviesParams } from '@/types/movies/request'
import { Movies } from '@/types/movies/response'

export interface MoviesState {
    data: Movies | null
    loading: boolean
    error: string | null
}

export type FetchMoviesPayload = MoviesParams
