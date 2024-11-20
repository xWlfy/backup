import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/'), 'soulstar://'],
  config: {
    screens: {
      Home: '',
      AR: 'ar/:starId?',
      Settings: 'settings',
    },
  },
};