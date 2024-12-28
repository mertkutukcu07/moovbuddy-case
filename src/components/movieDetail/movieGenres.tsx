import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'
import { Genre } from '@/types/movieDetails/response'

interface MovieGenresProps {
    genres: Genre[]
}

const MovieGenres = ({ genres }: MovieGenresProps) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Genres</Text>
            <View style={styles.genresContainer}>
                {genres.map(genre => (
                    <View key={genre.id} style={styles.genreTag}>
                        <Text style={styles.genreText}>{genre.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default MovieGenres

const styles = StyleSheet.create({
    section: {
        marginTop: theme.spacing.lg,
    },
    sectionTitle: {
        ...theme.typography.variants.h3,
        color: theme.colors.black,
        marginVertical: theme.spacing.sm,
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.xs,
    },
    genreTag: {
        backgroundColor: theme.colors.gray[200],
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.radius.full,
    },
    genreText: {
        ...theme.typography.variants.body2,
        color: theme.colors.gray[700],
    },
})
