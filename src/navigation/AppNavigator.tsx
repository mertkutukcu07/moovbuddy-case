import { NavigationContainer } from '@react-navigation/native'
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack'

import { RouteNames } from './RouteNames'
import { TabStack } from './stacks'

import { MovieDetailScreen } from '@/screens'

export type AppNavigatorParamList = {
    [RouteNames.TabStack]: undefined
    [RouteNames.MovieDetail]: { movieId: number }
}

const Stack = createNativeStackNavigator<AppNavigatorParamList>()

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={RouteNames.TabStack} component={TabStack} />
            <Stack.Screen
                name={RouteNames.MovieDetail}
                component={MovieDetailScreen}
            />
        </Stack.Navigator>
    )
}

export interface NavigationProps
    extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AppStackScreenProps<T extends keyof AppNavigatorParamList> =
    NativeStackScreenProps<AppNavigatorParamList, T>

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}
