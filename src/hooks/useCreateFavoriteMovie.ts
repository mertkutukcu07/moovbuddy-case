import { FavoriteMovie } from '@/store/features/favorites/types'
import { MovieDetailsResponse } from '@/types/movieDetails/response'
import { MovieItem } from '@/types/movies/response'

export const useCreateFavoriteMovie = () => {
    const createFromMovieItem = (movie: MovieItem): FavoriteMovie => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
    })

    const createFromMovieDetails = (
        movie: MovieDetailsResponse
    ): FavoriteMovie => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
        genres: movie.genres,
    })

    return {
        createFromMovieItem,
        createFromMovieDetails,
    }
}
