import * as Application from 'expo-application';
import * as Updates from 'expo-updates';

export const getAppVersion = () => {
  return Application.nativeApplicationVersion;
};

export const checkForUpdates = async () => {
  if (!__DEV__) {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
    }
  }
};