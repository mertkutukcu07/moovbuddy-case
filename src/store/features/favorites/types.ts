import { MovieDetailsResponse } from '@/types/movieDetails/response'

export interface FavoritesState {
    favoriteMovies: MovieDetailsResponse[]
}

export interface ToggleFavoritePayload {
    movie: MovieDetailsResponse
}
