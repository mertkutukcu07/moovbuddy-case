import { createSlice } from '@reduxjs/toolkit'

import { LoadingHandlerState } from './types'

const initialState: LoadingHandlerState = {
    isLoading: false,
    loadingCount: 0,
}

const loadingHandlerSlice = createSlice({
    name: 'loadingHandler',
    initialState,
    reducers: {
        startLoading: state => {
            state.loadingCount += 1
            state.isLoading = true
        },
        stopLoading: state => {
            state.loadingCount = Math.max(0, state.loadingCount - 1)
            state.isLoading = state.loadingCount > 0
        },
    },
})

export const { startLoading, stopLoading } = loadingHandlerSlice.actions
export default loadingHandlerSlice.reducer
