import { useCallback } from 'react';
import {
  useAnimatedStyle,
  withSpring,
  withTiming,
  WithSpringConfig,
  WithTimingConfig,
} from 'react-native-reanimated';

export const useAnimation = () => {
  const springStyle = useCallback((value: number, config?: WithSpringConfig) => {
    return useAnimatedStyle(() => ({
      transform: [{ scale: withSpring(value, config) }],
    }));
  }, []);

  const timingStyle = useCallback((value: number, config?: WithTimingConfig) => {
    return useAnimatedStyle(() => ({
      opacity: withTiming(value, config),
    }));
  }, []);

  return { springStyle, timingStyle };
};