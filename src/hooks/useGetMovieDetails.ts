import { useCallback } from 'react'

import { selectMovieDetails } from '@/store/features/movieDetails/movieDetailsSelectors'
import { fetchMovieDetailsThunk } from '@/store/features/movieDetails/movieDetailsThunks'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { useAppSelector } from '@/store/hooks/useAppSelector'
import { MovieDetailsParams } from '@/types/movieDetails/request'

export const useGetMovieDetails = () => {
    const dispatch = useAppDispatch()
    const movieDetails = useAppSelector(selectMovieDetails)

    const fetchMovieDetails = useCallback(
        (params: MovieDetailsParams) => {
            return dispatch(fetchMovieDetailsThunk(params))
        },
        [dispatch]
    )

    return {
        movieDetails,
        fetchMovieDetails,
    }
}
