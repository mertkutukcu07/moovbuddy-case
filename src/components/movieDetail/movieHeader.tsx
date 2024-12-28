import { Heart } from 'phosphor-react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useDateFormatters } from '@/hooks/useDateFormatters'
import { theme } from '@/theme'
import { MovieDetailsResponse } from '@/types/movieDetails/response'
import { getPosterUrl } from '@/utils/tmdb'

interface MovieHeaderProps {
    movieDetails: MovieDetailsResponse
    isFavorite: boolean
    handleToggleFavorite: () => void
}

const MovieHeader = ({
    movieDetails,
    isFavorite,
    handleToggleFavorite,
}: MovieHeaderProps) => {
    const { formatDate, formatDurationTime } = useDateFormatters()

    return (
        <View style={styles.headerContainer}>
            <Image
                source={{
                    uri: getPosterUrl(movieDetails?.poster_path ?? ''),
                }}
                style={styles.poster}
            />
            <View style={styles.headerInfo}>
                <Text style={styles.title}>{movieDetails?.title}</Text>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailText}>
                        {formatDate(movieDetails?.release_date)}
                    </Text>
                    <Text style={styles.detailText}>
                        {formatDurationTime(movieDetails?.runtime ?? 0)}
                    </Text>
                    <Text style={styles.detailText}>
                        {movieDetails?.original_language.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>
                        {movieDetails?.vote_average.toFixed(1)}
                    </Text>
                    <TouchableOpacity
                        style={styles.favoriteButton}
                        onPress={handleToggleFavorite}>
                        <Heart
                            size={24}
                            color={theme.colors.gray[500]}
                            weight={isFavorite ? 'fill' : 'regular'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MovieHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginTop: -theme.spacing.xxxl,
    },
    poster: {
        width: 100,
        height: 150,
        borderRadius: theme.radius.sm,
    },
    headerInfo: {
        flex: 1,
        marginLeft: theme.spacing.md,
        justifyContent: 'flex-end',
    },
    title: {
        ...theme.typography.variants.h3,
        color: theme.colors.black,
        marginBottom: theme.spacing.xs,
    },
    detailsRow: {
        flexDirection: 'row',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.xs,
    },
    detailText: {
        ...theme.typography.variants.body2,
        color: theme.colors.gray[600],
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rating: {
        ...theme.typography.variants.h3,
        color: theme.colors.black,
    },
    favoriteButton: {
        padding: theme.spacing.xs,
    },
})
