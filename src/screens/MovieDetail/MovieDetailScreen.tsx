import { useEffect } from 'react'
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { ArtistItem, Header, MovieGenres, MovieOverview } from '@/components'
import MovieHeader from '@/components/movieDetail/movieHeader'
import { useFavorites } from '@/hooks/useFavorites'
import { useFlatListOptimizations } from '@/hooks/useFlatlistOptimizations'
import { useGetArtistDetails } from '@/hooks/useGetArtistDetails'
import { useGetMovieDetails } from '@/hooks/useGetMovieDetails'
import { AppStackScreenProps } from '@/navigation/AppNavigator'
import { RouteNames } from '@/navigation/RouteNames'
import { theme } from '@/theme'
import { MovieDetailsResponse } from '@/types/movieDetails/response'
import { getBackdropUrl } from '@/utils/tmdb'
import { windowWidth } from '@/utils/windowSize'

interface MovieDetailScreenProps
    extends AppStackScreenProps<RouteNames.MovieDetail> {}

const MovieDetailScreen = ({ route, navigation }: MovieDetailScreenProps) => {
    const { movieId } = route.params || {}
    const { movieDetails, fetchMovieDetails } = useGetMovieDetails()
    const { artistDetails, fetchArtistDetails } = useGetArtistDetails()
    const artistListOptimizations = useFlatListOptimizations({
        itemHeight: 150,
        keyPrefix: 'artist',
        initialNumToRender: 3,
        maxToRenderPerBatch: 2,
        windowSize: 2,
    })
    const { isFavorite, handleToggleFavorite } = useFavorites()

    useEffect(() => {
        fetchMovieDetails({ movie_id: movieId })
        fetchArtistDetails({ movie_id: movieId })
    }, [fetchMovieDetails, fetchArtistDetails, movieId])

    return (
        <SafeAreaView style={styles.container}>
            <Header title="" onBack={() => navigation.goBack()} />
            <ScrollView>
                <Image
                    source={{
                        uri: getBackdropUrl(movieDetails?.backdrop_path ?? ''),
                        cache: 'force-cache',
                    }}
                    style={styles.backdrop}
                />
                <View style={styles.contentContainer}>
                    <MovieHeader
                        movieDetails={movieDetails as MovieDetailsResponse}
                        isFavorite={isFavorite(movieId)}
                        handleToggleFavorite={() =>
                            handleToggleFavorite(
                                movieDetails as MovieDetailsResponse
                            )
                        }
                    />
                    <MovieOverview overview={movieDetails?.overview ?? ''} />
                    <MovieGenres genres={movieDetails?.genres ?? []} />

                    <Text style={styles.artistTitle}>Artists Details</Text>
                    <FlatList
                        data={artistDetails?.cast}
                        renderItem={({ item }) => <ArtistItem item={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.artistList}
                        {...artistListOptimizations}
                        snapToAlignment="start"
                        decelerationRate="fast"
                        snapToInterval={150}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.default,
    },
    backdrop: {
        width: windowWidth,
        height: 200,
    },
    contentContainer: {
        padding: theme.spacing.md,
    },

    artistTitle: {
        ...theme.typography.variants.h3,
        color: theme.colors.black,
        marginTop: theme.spacing.lg,
    },
    artistList: {
        marginTop: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },
    favoriteIcon: {
        marginRight: theme.spacing.md,
    },
})

export default MovieDetailScreen
