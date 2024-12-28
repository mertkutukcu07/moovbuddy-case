import api from '../api'

import { ArtistDetailsResponse } from '@/types/artist/response'
import { ArtistDetailsParams } from '@/types/artistDetail/request'

export const getArtistDetails = async (
    params: ArtistDetailsParams
): Promise<ArtistDetailsResponse> => {
    const response = await api.get<ArtistDetailsResponse>(
        `/movie/${params.movie_id}/credits`
    )
    return response.data
}
