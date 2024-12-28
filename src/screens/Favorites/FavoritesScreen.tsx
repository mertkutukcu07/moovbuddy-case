import { useCallback } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Header, MovieCard } from '@/components'
import { useFavorites } from '@/hooks/useFavorites'
import { useFlatListOptimizations } from '@/hooks/useFlatlistOptimizations'
import { RouteNames } from '@/navigation/RouteNames'
import { TabNavigatorScreenProps } from '@/navigation/stacks/TabStack'
import { theme } from '@/theme'
import { MovieDetailsResponse } from '@/types/movieDetails/response'
import { MovieItem } from '@/types/movies/response'

interface FavoritesScreenProps
    extends TabNavigatorScreenProps<RouteNames.Favorites> {}

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
    const { favoriteMovies, isFavorite, handleToggleFavorite } = useFavorites()

    const handleMoviePress = useCallback(
        (movieId: number) => {
            // @ts-ignore
            navigation.navigate(RouteNames.MovieDetail, { movieId })
        },
        [navigation]
    )

    const movieListOptimizations = useFlatListOptimizations({
        itemHeight: 280,
        keyPrefix: 'favorite-movie',
        initialNumToRender: 6,
        maxToRenderPerBatch: 4,
        windowSize: 3,
    })

    if (favoriteMovies.length === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <Header title="Favorites" />
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                        You haven't added any movies to your favorites yet
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Favorites" />
            <FlatList
                data={favoriteMovies}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item }) => (
                    <MovieCard
                        movie={item as unknown as MovieItem}
                        onPress={handleMoviePress}
                        isFavorite={isFavorite(item.id)}
                        handleToggleFavorite={() =>
                            handleToggleFavorite(item as MovieDetailsResponse)
                        }
                    />
                )}
                {...movieListOptimizations}
            />
        </SafeAreaView>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.default,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    contentContainer: {
        paddingHorizontal: theme.spacing.md,
        marginTop: theme.spacing.md,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.lg,
    },
    emptyText: {
        ...theme.typography.variants.body1,
        color: theme.colors.text.secondary,
        textAlign: 'center',
    },
})
