import { createAsyncThunk } from '@reduxjs/toolkit'

import { showError } from '../errorHandler/errorHandlerSlice'
import {
    fetchMovieDetailsFailure,
    fetchMovieDetailsStart,
    fetchMovieDetailsSuccess,
} from './movieDetailsSlice'
import { FetchMovieDetailsPayload } from './types'

import { withLoading } from '@/hooks/useWithLoading'
import { getMovieDetails } from '@/services/movieDetails'
import { AppDispatch } from '@/store'

export const fetchMovieDetailsThunk = createAsyncThunk(
    'movieDetails/fetchMovieDetails',
    async (params: FetchMovieDetailsPayload, { dispatch }) => {
        try {
            dispatch(fetchMovieDetailsStart())
            const movieDetails = await withLoading(
                dispatch as AppDispatch,
                () => getMovieDetails({ movie_id: params.movie_id })
            )

            dispatch(fetchMovieDetailsSuccess(movieDetails))
            return movieDetails
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Bir hata oluştu'

            dispatch(fetchMovieDetailsFailure(errorMessage))
            dispatch(showError(errorMessage))
            throw error
        }
    }
)
