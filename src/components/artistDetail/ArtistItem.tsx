import { Image, StyleSheet, Text, View } from 'react-native'

import { theme } from '@/theme'
import { Cast } from '@/types/artistDetail/response'
import { getProfileUrl } from '@/utils/tmdb'

interface ArtistItemProps {
    item: Cast
}

const ArtistItem = ({ item }: ArtistItemProps) => {
    return (
        <View style={styles.artistCard}>
            <Image
                source={{
                    uri: getProfileUrl(item.profile_path ?? '', 'w185'),
                    cache: 'force-cache',
                }}
                style={styles.artistImage}
            />
            <Text style={styles.artistName}>{item.name}</Text>
            <Text style={styles.characterName}>{item.character}</Text>
        </View>
    )
}

export default ArtistItem

const styles = StyleSheet.create({
    artistCard: {
        width: 100,
        marginRight: theme.spacing.md,
    },
    artistImage: {
        width: 100,
        height: 150,
        borderRadius: theme.radius.sm,
        marginBottom: theme.spacing.xs,
    },
    artistName: {
        ...theme.typography.variants.body2,
        color: theme.colors.black,
    },
    characterName: {
        ...theme.typography.variants.body2,
        color: theme.colors.gray[600],
    },
})
