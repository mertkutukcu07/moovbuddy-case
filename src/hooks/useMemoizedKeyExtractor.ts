import { useCallback } from 'react'

export const useMemoizedKeyExtractor = () => {
    return useCallback((type: string, index: number) => {
        return `${type}-${index}`
    }, [])
}
