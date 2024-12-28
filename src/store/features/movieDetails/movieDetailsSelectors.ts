import { RootState } from '@/store/rootReducer'

export const selectMovieDetails = (state: RootState) => state.movieDetails.data
export const selectMovieDetailsLoading = (state: RootState) =>
    state.movieDetails.loading
export const selectMovieDetailsError = (state: RootState) =>
    state.movieDetails.error
