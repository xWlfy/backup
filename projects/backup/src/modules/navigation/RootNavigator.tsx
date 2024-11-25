// RootNavigator.tsx
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../../providers/authContext';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../../screens/LoginScreen';
import { linking } from './linking';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};