import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Text } from '../../../components/Text';
import { Star } from '../../../types/api';
import { Theme } from '../../../theme';

type StarCardProps = {
  star: Star;
  onPress: (star: Star) => void;
};

export const StarCard = ({ star, onPress }: StarCardProps) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.colors.mainBackground }]}
      onPress={() => onPress(star)}>
      <Text variant="header">{star.name}</Text>
      <Text variant="body">Magnitude: {star.magnitude}</Text>
      <Text variant="body">Distance: {star.distance} light years</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});