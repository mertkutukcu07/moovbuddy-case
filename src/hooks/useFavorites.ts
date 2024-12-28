import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    selectFavoriteMovies,
    selectIsFavoriteMovie,
} from '@/store/features/favorites/favoritesSelectors'
import { toggleFavorite } from '@/store/features/favorites/favoritesSlice'
import { useAppSelector } from '@/store/hooks/useAppSelector'
import { MovieDetailsResponse } from '@/types/movieDetails/response'

export const useFavorites = () => {
    const dispatch = useDispatch()
    const favoriteMovies = useSelector(selectFavoriteMovies)
    const state = useAppSelector(state => state)

    const isFavorite = useCallback(
        (movieId: number) => {
            return selectIsFavoriteMovie(state, movieId)
        },
        [state]
    )

    const handleToggleFavorite = useCallback(
        (movie: MovieDetailsResponse) => {
            dispatch(toggleFavorite({ movie }))
        },
        [dispatch]
    )

    return {
        favoriteMovies,
        isFavorite,
        handleToggleFavorite,
    }
}
