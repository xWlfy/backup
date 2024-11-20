import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ARScreen } from '../screens/ARScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { RootStackParamList } from '../types/navigation';
import { linking } from '../services/linking';
import { usePermissions } from '../hooks/usePermissions';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { hasLocationPermission, hasCameraPermission } = usePermissions();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {hasCameraPermission && (
          <Stack.Screen name="AR" component={ARScreen} />
        )}
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};