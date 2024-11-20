import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, Button, StarCard } from '../components';
import { useStars } from '../api/queries/stars';
import { optimizedList as FlashList } from '../utils/performance';
import { Star } from '../types/star';
import { useStarStore } from '../stores/useStarStore';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { data: stars, isLoading } = useStars();
  const setSelectedStar = useStarStore(state => state.setSelectedStar);

  const handleStarPress = (star: Star) => {
    setSelectedStar(star);
    navigation.navigate('AR');
  };

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text variant="body">Loading stars...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text variant="header">SoulStar</Text>
        <FlashList
          data={stars}
          renderItem={({ item }) => (
            <StarCard star={item} onPress={handleStarPress} />
          )}
          estimatedItemSize={100}
        />
      </View>
    </SafeAreaView>
  );
};