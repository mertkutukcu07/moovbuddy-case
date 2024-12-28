import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import artistDetailReducer from './features/artist/artistDetailSlice'
import errorHandlerReducer from './features/errorHandler/errorHandlerSlice'
import favoritesReducer from './features/favorites/favoritesSlice'
import loadingHandlerReducer from './features/loadingHandler/loadingHandlerSlice'
import movieDetailsReducer from './features/movieDetails/movieDetailsSlice'
import moviesReducer from './features/movies/moviesSlice'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['movies', 'favorites'],
}

const rootReducer = combineReducers({
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    errorHandler: errorHandlerReducer,
    loadingHandler: loadingHandlerReducer,
    artistDetail: artistDetailReducer,
    favorites: favoritesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export default persistedReducer
