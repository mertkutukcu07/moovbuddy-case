import { useCallback } from 'react'

import { selectMovies } from '@/store/features/movies/moviesSelectors'
import { fetchMoviesThunk } from '@/store/features/movies/moviesThunks'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { useAppSelector } from '@/store/hooks/useAppSelector'
import { MoviesParams } from '@/types/movies/request'

export const useGetMovies = () => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector(selectMovies)

    const fetchMovies = useCallback(
        (params: MoviesParams) => {
            return dispatch(fetchMoviesThunk(params))
        },
        [dispatch]
    )

    return {
        movies,
        fetchMovies,
    }
}
