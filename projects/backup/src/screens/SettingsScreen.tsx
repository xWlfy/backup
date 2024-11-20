import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/Text';
import { useLocale } from '../hooks/useLocale';

export const SettingsScreen = () => {
  const { t, setLocale } = useLocale();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="header">{t('settings.title')}</Text>
    </View>
  );
};