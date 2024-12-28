import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FavoritesState, ToggleFavoritePayload } from './types'

const initialState: FavoritesState = {
    favoriteMovies: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (
            state,
            action: PayloadAction<ToggleFavoritePayload>
        ) => {
            const movieIndex = state.favoriteMovies.findIndex(
                movie => movie.id === action.payload.movie.id
            )

            if (movieIndex >= 0) {
                state.favoriteMovies.splice(movieIndex, 1)
            } else {
                state.favoriteMovies.push(action.payload.movie)
            }
        },
    },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
