import { useEffect, useState } from 'react'

import { useDebounce } from './useDebounce'
import { useGetMovies } from './useGetMovies'

export const useSearchMovies = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedSearchQuery = useDebounce(searchQuery)
    const { movies, fetchMovies } = useGetMovies()

    useEffect(() => {
        fetchMovies({
            language: 'en-US',
            page: 1,
            query: debouncedSearchQuery || undefined,
        })
    }, [debouncedSearchQuery, fetchMovies])

    const handleSearch = (text: string) => {
        setSearchQuery(text)
    }

    return {
        searchQuery,
        handleSearch,
        movies,
    }
}
