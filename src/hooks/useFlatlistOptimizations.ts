import { useCallback, useMemo } from 'react'

interface FlatListOptimizationsProps<T> {
    itemHeight: number
    initialNumToRender?: number
    maxToRenderPerBatch?: number
    windowSize?: number
    keyPrefix: string
}

export const useFlatListOptimizations = <T>({
    itemHeight,
    initialNumToRender = 10,
    maxToRenderPerBatch = 5,
    windowSize = 5,
    keyPrefix,
}: FlatListOptimizationsProps<T>) => {
    const getItemLayout = useCallback(
        (_: any, index: number) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
        }),
        [itemHeight]
    )

    const keyExtractor = useCallback(
        (_: any, index: number) => `${keyPrefix}-${index}`,
        [keyPrefix]
    )

    const optimizationProps = useMemo(
        () => ({
            removeClippedSubviews: true,
            maxToRenderPerBatch,
            updateCellsBatchingPeriod: 50,
            initialNumToRender,
            windowSize,
            getItemLayout,
            keyExtractor,
            maintainVisibleContentPosition: {
                minIndexForVisible: 0,
            },
        }),
        [
            getItemLayout,
            keyExtractor,
            initialNumToRender,
            maxToRenderPerBatch,
            windowSize,
        ]
    )

    return optimizationProps
}
