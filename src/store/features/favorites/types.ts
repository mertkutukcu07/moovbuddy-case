import { MovieDetailsResponse } from '@/types/movieDetails/response'
import { MovieItem } from '@/types/movies/response'

export type FavoriteMovie = Partial<MovieDetailsResponse> &
    Pick<MovieItem, 'id' | 'title' | 'poster_path' | 'vote_average'>

export interface FavoritesState {
    favoriteMovies: FavoriteMovie[]
}

export interface ToggleFavoritePayload {
    movie: FavoriteMovie
}
