// linking.ts
import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { auth } from '../../firebase.config';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/'), 'soulstar://'],
  config: {
    screens: {
      Login: 'login',
      Home: '',
      AR: 'ar/:starId?',
      Settings: 'settings',
    },
  },
  getAction: async (url: string, _: any) => {
    const action = Linking.parse(url);
    const user = auth.currentUser;
    if (!user && action?.path !== 'login') {
      return { type: 'navigation', routeName: 'Login' };
    }
    return action;
  },
};