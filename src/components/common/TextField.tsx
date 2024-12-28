import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

import { theme } from '@/theme'

interface TextFieldProps extends TextInputProps {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

const TextField = ({ leftIcon, rightIcon, ...props }: TextFieldProps) => {
    return (
        <View style={styles.container}>
            {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
            <TextInput style={styles.input} {...props} />
            {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    container: {
        ...theme.typography.variants.body1,
        color: theme.colors.text.primary,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.border.medium,
        borderRadius: theme.radius.md,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        backgroundColor: theme.colors.white,
        marginHorizontal: theme.spacing.screenPadding,
        marginVertical: theme.spacing.md,
    },
    input: {
        ...theme.typography.variants.body1,
        color: theme.colors.text.primary,
    },
    leftIcon: {
        marginRight: theme.spacing.sm,
    },
    rightIcon: {
        marginLeft: theme.spacing.sm,
    },
})
