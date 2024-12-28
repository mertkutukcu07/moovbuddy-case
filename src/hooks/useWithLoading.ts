import { AppDispatch } from '@/store'
import {
    startLoading,
    stopLoading,
} from '@/store/features/loadingHandler/loadingHandlerSlice'

export const withLoading = async <T>(
    dispatch: AppDispatch,
    asyncFn: () => Promise<T>
): Promise<T> => {
    try {
        dispatch(startLoading())
        const result = await asyncFn()
        return result
    } finally {
        dispatch(stopLoading())
    }
}
