import { createSlice } from '@reduxjs/toolkit'

import { ArtistDetailsState } from './types'

const initialState: ArtistDetailsState = {
    data: null,
    loading: false,
    error: null,
}

export const artistDetailSlice = createSlice({
    name: 'artistDetail',
    initialState,
    reducers: {
        fetchArtistDetailsStart: state => {
            state.loading = true
            state.error = null
        },
        fetchArtistDetailsSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchArtistDetailsFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const {
    fetchArtistDetailsStart,
    fetchArtistDetailsSuccess,
    fetchArtistDetailsFailure,
} = artistDetailSlice.actions

export default artistDetailSlice.reducer
