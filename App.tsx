import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { ErrorHandler } from '@/components'
import LoadingHandler from '@/components/common/Loading'
import { AppNavigator } from '@/navigation/AppNavigator'
import { persistor, store } from '@/store'

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={styles.container}>
                    <StatusBar style="auto" />
                    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                        <ErrorHandler />
                        <LoadingHandler />
                        <AppNavigator />
                    </SafeAreaProvider>
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
