import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Heart, House } from 'phosphor-react-native'

import { RouteNames } from '../RouteNames'

import { FavoritesScreen, HomeScreen } from '@/screens'
import { theme } from '@/theme'

export type TabStackParamList = {
    [RouteNames.Home]: undefined
    [RouteNames.Favorites]: undefined
}

export type TabNavigatorScreenProps<T extends keyof TabStackParamList> =
    NativeStackScreenProps<TabStackParamList, T>

const Tab = createBottomTabNavigator<TabStackParamList>()

export default function TabStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.selectionTab.active,
                tabBarInactiveTintColor: theme.colors.selectionTab.inactive,
                headerShown: false,
            }}>
            <Tab.Screen
                name={RouteNames.Home}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <House size={size} color={color} weight="bold" />
                    ),
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name={RouteNames.Favorites}
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Heart size={size} color={color} weight="bold" />
                    ),
                    tabBarLabel: 'Favorites',
                }}
            />
        </Tab.Navigator>
    )
}
