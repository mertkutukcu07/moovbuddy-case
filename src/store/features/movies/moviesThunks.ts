import { createAsyncThunk } from '@reduxjs/toolkit'

import { showError } from '../errorHandler/errorHandlerSlice'
import {
    fetchMoviesFailure,
    fetchMoviesStart,
    fetchMoviesSuccess,
} from './moviesSlice'
import { FetchMoviesPayload } from './types'

import { withLoading } from '@/hooks/useWithLoading'
import { getMovies } from '@/services/movies'
import { AppDispatch } from '@/store'

export const fetchMoviesThunk = createAsyncThunk(
    'movies/fetchMovies',
    async (params: FetchMoviesPayload, { dispatch }) => {
        try {
            dispatch(fetchMoviesStart())

            const movies = await withLoading(dispatch as AppDispatch, () =>
                getMovies(params)
            )

            dispatch(fetchMoviesSuccess(movies))
            return movies
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Bir hata oluştu'

            dispatch(fetchMoviesFailure(errorMessage))
            dispatch(showError(errorMessage))
            throw error
        }
    }
)
