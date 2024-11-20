import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { checkVisibleStars } from '../utils/coordinates';

const STAR_UPDATE_TASK = 'STAR_UPDATE_TASK';

TaskManager.defineTask(STAR_UPDATE_TASK, async () => {
  try {
    await checkVisibleStars();
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export async function registerBackgroundTask() {
  try {
    await BackgroundFetch.registerTaskAsync(STAR_UPDATE_TASK, {
      minimumInterval: 60 * 15, // 15 minutes
      stopOnTerminate: false,
      startOnBoot: true,
    });
  } catch (err) {
    console.error("Task registration failed:", err);
  }
}