import { MagnifyingGlass } from 'phosphor-react-native'
import { useCallback } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

import { Header, MovieCard, TextField } from '@/components'
import { useFavorites } from '@/hooks/useFavorites'
import { useFlatListOptimizations } from '@/hooks/useFlatlistOptimizations'
import { useSearchMovies } from '@/hooks/useSearchMovies'
import { RouteNames } from '@/navigation/RouteNames'
import { TabNavigatorScreenProps } from '@/navigation/stacks/TabStack'
import { theme } from '@/theme'
import { MovieDetailsResponse } from '@/types/movieDetails/response'

interface HomeScreenProps extends TabNavigatorScreenProps<RouteNames.Home> {}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { movies, handleSearch, searchQuery } = useSearchMovies()
    const { isFavorite, handleToggleFavorite } = useFavorites()
    const handleMoviePress = useCallback(
        (movieId: number) => {
            // @ts-ignore
            navigation.navigate(RouteNames.MovieDetail, { movieId })
        },
        [navigation]
    )

    const movieListOptimizations = useFlatListOptimizations({
        itemHeight: 280,
        keyPrefix: 'movie',
        initialNumToRender: 6,
        maxToRenderPerBatch: 4,
        windowSize: 3,
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Movies" />
            <TextField
                value={searchQuery}
                onChangeText={handleSearch}
                placeholder="Search"
                leftIcon={
                    <MagnifyingGlass size={24} color={theme.colors.black} />
                }
            />
            <FlatList
                data={movies?.results}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item }) => (
                    <MovieCard
                        movie={item}
                        onPress={handleMoviePress}
                        isFavorite={isFavorite(item.id)}
                        handleToggleFavorite={() =>
                            handleToggleFavorite(
                                movies?.results?.find(
                                    movie => movie.id === item.id
                                ) as unknown as MovieDetailsResponse
                            )
                        }
                    />
                )}
                {...movieListOptimizations}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

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
    },
})
