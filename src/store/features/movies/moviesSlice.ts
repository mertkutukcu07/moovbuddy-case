import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MoviesState } from './types'

import { Movies } from '@/types/movies/response'

const initialState: MoviesState = {
    data: null,
    loading: false,
    error: null,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesStart: state => {
            state.loading = true
            state.error = null
        },
        fetchMoviesSuccess: (state, action: PayloadAction<Movies>) => {
            state.loading = false
            state.data = action.payload
        },
        fetchMoviesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
    moviesSlice.actions
export default moviesSlice.reducer
