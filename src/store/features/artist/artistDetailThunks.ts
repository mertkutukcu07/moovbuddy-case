import { createAsyncThunk } from '@reduxjs/toolkit'

import { showError } from '../errorHandler/errorHandlerSlice'
import {
    fetchArtistDetailsFailure,
    fetchArtistDetailsStart,
    fetchArtistDetailsSuccess,
} from './artistDetailSlice'
import { FetchArtistDetailsPayload } from './types'

import { withLoading } from '@/hooks/useWithLoading'
import { getArtistDetails } from '@/services/artist'
import { AppDispatch } from '@/store'

export const fetchArtistDetailsThunk = createAsyncThunk(
    'artist/fetchArtistDetails',
    async (params: FetchArtistDetailsPayload, { dispatch }) => {
        try {
            dispatch(fetchArtistDetailsStart())
            const artistDetails = await withLoading(
                dispatch as AppDispatch,
                () => getArtistDetails(params)
            )
            dispatch(fetchArtistDetailsSuccess(artistDetails))
            return artistDetails
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Bir hata oluştu'
            dispatch(fetchArtistDetailsFailure(errorMessage))
            dispatch(showError(errorMessage))
            throw error
        }
    }
)
