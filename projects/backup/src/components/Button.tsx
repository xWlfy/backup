import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Text } from './Text';
import { Theme } from '../theme';

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ label, onPress, variant = 'primary' }: ButtonProps) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: theme.colors[variant] }
      ]}
      onPress={onPress}>
      <Text variant="button" color="white">{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});