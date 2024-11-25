// LoginScreen.tsx
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../providers/authContext';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={login} style={styles.button}>
        Sign in with Google
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#4285F4',
  },
});

export default LoginScreen;