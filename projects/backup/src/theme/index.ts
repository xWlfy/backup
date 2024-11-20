import { createTheme } from '@shopify/restyle';

const palette = {
  purple: '#5A31F4',
  white: '#FFF',
  black: '#111',
  darkGray: '#333',
  lightGray: '#EEE',
};

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primary: palette.purple,
    secondary: palette.darkGray,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontSize: 24,
      fontFamily: 'Inter_600SemiBold',
      color: 'mainForeground',
    },
    body: {
      fontSize: 16,
      fontFamily: 'Inter_400Regular',
      color: 'mainForeground',
    },
    button: {
      fontSize: 16,
      fontFamily: 'Inter_600SemiBold',
      color: 'white',
    },
  },
});

export type Theme = typeof theme;