import { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {
    selectErrorMessage,
    selectIsErrorVisible,
} from '@/store/features/errorHandler/errorHandlerSelectors'
import { hideError } from '@/store/features/errorHandler/errorHandlerSlice'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { useAppSelector } from '@/store/hooks/useAppSelector'
import { theme } from '@/theme'

const ErrorHandler = () => {
    const dispatch = useAppDispatch()
    const message = useAppSelector(selectErrorMessage)
    const isVisible = useAppSelector(selectIsErrorVisible)

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                dispatch(hideError())
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [isVisible, dispatch])

    if (!isVisible || !message) return null

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity
                onPress={() => dispatch(hideError())}
                style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.error,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
    },
    message: {
        color: theme.colors.white,
        flex: 1,
        marginRight: 8,
    },
    closeButton: {
        padding: 4,
    },
    closeButtonText: {
        color: theme.colors.white,
        fontSize: 16,
    },
})

export default ErrorHandler
