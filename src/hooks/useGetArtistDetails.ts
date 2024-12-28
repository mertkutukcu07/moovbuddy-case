import { useCallback } from 'react'

import { selectArtistDetails } from '@/store/features/artist/artistDetailSelectors'
import { fetchArtistDetailsThunk } from '@/store/features/artist/artistDetailThunks'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { useAppSelector } from '@/store/hooks/useAppSelector'
import { ArtistDetailsParams } from '@/types/artistDetail/request'

export const useGetArtistDetails = () => {
    const dispatch = useAppDispatch()
    const artistDetails = useAppSelector(selectArtistDetails)

    const fetchArtistDetails = useCallback(
        (params: ArtistDetailsParams) => {
            return dispatch(fetchArtistDetailsThunk(params))
        },
        [dispatch]
    )

    return {
        artistDetails,
        fetchArtistDetails,
    }
}
