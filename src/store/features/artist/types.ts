import { ArtistDetailsParams } from '@/types/artistDetail/request'
import { ArtistDetailsResponse } from '@/types/artistDetail/response'

export interface ArtistDetailsState {
    data: ArtistDetailsResponse | null
    loading: boolean
    error: string | null
}

export type FetchArtistDetailsPayload = ArtistDetailsParams
