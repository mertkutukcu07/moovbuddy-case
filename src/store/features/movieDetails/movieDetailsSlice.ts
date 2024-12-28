import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MovieDetailsState } from './types'

import { MovieDetailsResponse } from '@/types/movieDetails/response'

const initialState: MovieDetailsState = {
    data: null,
    loading: false,
    error: null,
}

export const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
        fetchMovieDetailsStart: state => {
            state.loading = true
        },
        fetchMovieDetailsSuccess: (
            state,
            action: PayloadAction<MovieDetailsResponse>
        ) => {
            state.loading = false
            state.data = action.payload
        },
        fetchMovieDetailsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const {
    fetchMovieDetailsStart,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsFailure,
} = movieDetailsSlice.actions
export default movieDetailsSlice.reducer
