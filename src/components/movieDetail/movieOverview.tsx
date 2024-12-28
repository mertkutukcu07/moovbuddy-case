import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'

interface MovieOverviewProps {
    overview: string
}

const MovieOverview = ({ overview }: MovieOverviewProps) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.overview}>{overview}</Text>
        </View>
    )
}

export default MovieOverview

const styles = StyleSheet.create({
    section: {
        marginTop: theme.spacing.lg,
    },
    sectionTitle: {
        ...theme.typography.variants.h3,
        color: theme.colors.black,
        marginVertical: theme.spacing.sm,
    },
    overview: {
        ...theme.typography.variants.body1,
        color: theme.colors.gray[700],
    },
})
