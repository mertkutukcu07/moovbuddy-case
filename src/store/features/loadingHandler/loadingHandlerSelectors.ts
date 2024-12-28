import { RootState } from '@/store/rootReducer'

export const selectIsLoading = (state: RootState) =>
    state.loadingHandler.isLoading
