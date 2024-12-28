import { ArrowLeft } from 'phosphor-react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { theme } from '@/theme'

interface HeaderProps {
    title: string
    onBack?: () => void
}

const Header = ({ title, onBack }: HeaderProps) => {
    return (
        <View style={styles.container}>
            {onBack && (
                <TouchableOpacity onPress={onBack}>
                    <ArrowLeft size={24} color={theme.colors.black} />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.sm,
        paddingHorizontal: theme.spacing.screenPadding,
    },
    title: {
        ...theme.typography.variants.h2,
        color: theme.colors.black,
    },
})
