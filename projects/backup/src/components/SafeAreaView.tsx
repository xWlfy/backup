import React from 'react';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

type Props = {
  children: React.ReactNode;
};

export const SafeAreaView = ({ children }: Props) => {
  const theme = useTheme<Theme>();

  return (
    <NativeSafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.mainBackground,
      }}>
      {children}
    </NativeSafeAreaView>
  );
};