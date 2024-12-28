import { RootState } from '@/store/rootReducer'

export const selectErrorMessage = (state: RootState) =>
    state.errorHandler.message

export const selectIsErrorVisible = (state: RootState) =>
    state.errorHandler.isVisible
