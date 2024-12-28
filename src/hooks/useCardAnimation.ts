import { useRef } from 'react'
import { Animated } from 'react-native'

export const useCardAnimation = () => {
    const scaleValue = useRef(new Animated.Value(1)).current

    const animatePress = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.95,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start()
    }

    return {
        cardStyle: {
            transform: [{ scale: scaleValue }],
        },
        animatePress,
    }
}
