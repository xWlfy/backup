import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useAppState = (onChange: (status: AppStateStatus) => void) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current !== nextAppState) {
        onChange(nextAppState);
        appState.current = nextAppState;
      }
    });

    return () => {
      subscription.remove();
    };
  }, [onChange]);

  return appState.current;
};