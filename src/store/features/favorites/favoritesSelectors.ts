import { RootState } from '@/store/rootReducer'

export const selectFavoriteMovies = (state: RootState) =>
    state.favorites.favoriteMovies

export const selectIsFavoriteMovie = (state: RootState, movieId: number) =>
    state.favorites.favoriteMovies.some(movie => movie.id === movieId)
