import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { selectIsLoading } from '@/store/features/loadingHandler/loadingHandlerSelectors'
import { useAppSelector } from '@/store/hooks/useAppSelector'
import { theme } from '@/theme'

const LoadingHandler = () => {
    const isLoading = useAppSelector(selectIsLoading)

    if (!isLoading) return null

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={theme.colors.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme.colors.overlay.medium,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
})

export default LoadingHandler
