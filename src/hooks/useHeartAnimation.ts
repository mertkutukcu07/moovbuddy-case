import { useRef } from 'react'
import { Animated } from 'react-native'

export const useHeartAnimation = () => {
    const scaleValue = useRef(new Animated.Value(1)).current

    const animateHeart = (isFavorite: boolean) => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: isFavorite ? 1 : 0.8,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start()
    }

    return {
        heartStyle: {
            transform: [{ scale: scaleValue }],
        },
        animateHeart,
    }
}
