// Import necessary navigation components
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../../screens/HomeScreen';
import { ARScreen } from '../../screens/ARScreen';
import { SettingsScreen } from '../../screens/SettingsScreen';

// Create stack navigators for each tab
const HomeStack = createNativeStackNavigator();
const ARStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

// Define stack navigator components
function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            {/* Add nested screens for Home if needed */}
        </HomeStack.Navigator>
    );
}

function ARStackScreen() {
    return (
        <ARStack.Navigator screenOptions={{ headerShown: false }}>
            <ARStack.Screen name="AR" component={ARScreen} />
            {/* Add nested screens for AR if needed */}
        </ARStack.Navigator>
    );
}

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            {/* Add nested screens for Settings if needed */}
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    const icons = {
        Home: ['home-outline', 'home'],
        AR: ['camera-outline', 'camera'],
        Settings: ['settings-outline', 'settings'],
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const [inactiveIcon, activeIcon] = icons[route.name as keyof typeof icons];
                    const iconName = focused ? activeIcon : inactiveIcon;
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="AR" component={ARStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
