import { InteractionManager } from 'react-native';
import { FlashList } from '@shopify/flash-list';

export const runAfterInteractions = (task: () => any) => {
  InteractionManager.runAfterInteractions(task);
};

export const optimizedList = FlashList;