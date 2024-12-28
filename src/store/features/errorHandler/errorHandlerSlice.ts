import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ErrorHandlerState } from './types'

const initialState: ErrorHandlerState = {
    message: null,
    isVisible: false,
}

const errorHandlerSlice = createSlice({
    name: 'errorHandler',
    initialState,
    reducers: {
        showError: (state, action: PayloadAction<string>) => {
            state.message = action.payload
            state.isVisible = true
        },
        hideError: state => {
            state.message = null
            state.isVisible = false
        },
    },
})

export const { showError, hideError } = errorHandlerSlice.actions

export default errorHandlerSlice.reducer
