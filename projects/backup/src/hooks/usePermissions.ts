import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';

export const usePermissions = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    async function requestPermissions() {
      const [locationStatus, cameraStatus] = await Promise.all([
        Location.requestForegroundPermissionsAsync(),
        Camera.requestCameraPermissionsAsync(),
      ]);

      setHasLocationPermission(locationStatus.status === 'granted');
      setHasCameraPermission(cameraStatus.status === 'granted');
    }

    requestPermissions();
  }, []);

  return { hasLocationPermission, hasCameraPermission };
};