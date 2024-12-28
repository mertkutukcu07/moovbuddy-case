import { RootState } from '@/store/rootReducer'

export const selectMovies = (state: RootState) => state.movies.data
export const selectMoviesLoading = (state: RootState) => state.movies.loading
export const selectMoviesError = (state: RootState) => state.movies.error
