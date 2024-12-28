import { Heart } from 'phosphor-react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { theme } from '@/theme'
import { MovieItem } from '@/types/movies/response'
import { getPosterUrl } from '@/utils/tmdb'

interface MovieCardProps {
    movie: MovieItem
    onPress: (movieId: number) => void
    isFavorite: boolean
    handleToggleFavorite: () => void
}

const MovieCard = ({
    movie,
    onPress,
    isFavorite,
    handleToggleFavorite,
}: MovieCardProps) => {
    const posterUrl = getPosterUrl(movie.poster_path)

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(movie.id)}>
            <Image
                source={{ uri: posterUrl }}
                style={styles.poster}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {movie.title}
                </Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>
                        {movie.vote_average.toFixed(1)}
                    </Text>
                    <TouchableOpacity
                        style={styles.favoriteButton}
                        onPress={handleToggleFavorite}>
                        <Heart
                            size={20}
                            color={theme.colors.gray[500]}
                            weight={isFavorite ? 'fill' : 'regular'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container: {
        width: '48%',
        marginBottom: theme.spacing.md,
        backgroundColor: theme.colors.white,
        borderRadius: theme.radius.md,
        ...theme.shadows.md,
    },
    poster: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: theme.radius.md,
        borderTopRightRadius: theme.radius.md,
    },
    infoContainer: {
        padding: theme.spacing.sm,
    },
    title: {
        ...theme.typography.variants.body1,
        color: theme.colors.black,
        marginBottom: theme.spacing.xs,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rating: {
        ...theme.typography.variants.body2,
        color: theme.colors.gray[700],
    },
    favoriteButton: {
        padding: 4,
    },
})
