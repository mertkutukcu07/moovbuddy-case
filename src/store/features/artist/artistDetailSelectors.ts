import { RootState } from '@/store/rootReducer'

export const selectArtistDetails = (state: RootState) => state.artistDetail.data
export const selectArtistDetailsLoading = (state: RootState) =>
    state.artistDetail.loading
export const selectArtistDetailsError = (state: RootState) =>
    state.artistDetail.error
