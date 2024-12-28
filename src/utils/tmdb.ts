const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

type ImageSize = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'

export const getBackdropUrl = (
    path: string | null,
    size: ImageSize = 'original'
): string => {
    if (!path) return ''
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}

export const getPosterUrl = (
    path: string | null,
    size: ImageSize = 'w500'
): string => {
    if (!path) return ''
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}

export const getImageUrl = (path: string | null, size: ImageSize): string => {
    if (!path) return ''
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}

export const getProfileUrl = (path: string | null, size: ImageSize): string => {
    if (!path) return ''
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}
