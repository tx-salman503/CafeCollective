import {
  RESULTS,
  request,
  requestMultiple,
  requestNotifications,
  requestLocationAccuracy,
  PERMISSIONS,
  openSettings,
  check,
} from 'react-native-permissions';
import { Platform, Alert } from 'react-native';

let locationDeniedCount = 0;

const handlePermission = result => {
  switch (result) {
    case RESULTS.LIMITED:
    case RESULTS.GRANTED:
      return true;
    default:
      return false;
  }
};

const showSettingsAlert = () => {
  Alert.alert(
    'Location Permission Required',
    'Please enable location permission from Settings to continue.',
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Open Settings',
        onPress: () => {
          locationDeniedCount = 0;
          openSettings().catch(() => { });
        },
      },
    ],
    { cancelable: false }
  );
};

const permissionUtils = {
  getSinglePermission: async permission => {
    try {
      const result = await request(permission);
      return handlePermission(result);
    } catch {
      return false;
    }
  },

  getMultiplePermission: async permissions => {
    try {
      const results = await requestMultiple(permissions);
      return permissions.some(p => handlePermission(results[p]));
    } catch {
      return false;
    }
  },

  requestNotificationPermission: async () => {
    try {
      const { status } = await requestNotifications(['alert', 'badge', 'sound']);
      return status === 'granted';
    } catch {
      return false;
    }
  },

  requestLocationAccuracyPermission: async () => {
    try {
      const accuracy = await requestLocationAccuracy({
        purposeKey: 'Need to fetch your location to show active route between two points',
      });
      return accuracy === 'full';
    } catch {
      return false;
    }
  },

  requestLocationPermission: async () => {
    try {
      const locationPermission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const currentStatus = await check(locationPermission);

      if (currentStatus === RESULTS.GRANTED || currentStatus === RESULTS.LIMITED) {
        locationDeniedCount = 0;
        return true;
      }

      if (currentStatus === RESULTS.BLOCKED) {
        showSettingsAlert();
        return false;
      }

      const result = await request(locationPermission);

      if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
        locationDeniedCount = 0;
        return true;
      }

      locationDeniedCount += 1;

      if (locationDeniedCount >= 2) {
        showSettingsAlert();
      } else {
        Alert.alert(
          'Location Permission',
          'Location access is needed. Please allow it to continue.',
          [{ text: 'OK' }]
        );
      }

      return false;
    } catch {
      return false;
    }
  },

  requestCameraPermission: async () => {
    try {
      const cameraPermission =
        Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
      const result = await request(cameraPermission);
      return handlePermission(result);
    } catch {
      return false;
    }
  },


  checkCameraPermission: async () => {
    try {
      const cameraPermission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
      const result = await check(cameraPermission);
      return handlePermission(result);
    } catch {
      return false;
    }
  },




  // Sirf check karo, request mat karo
  checkLocationPermission: async () => {
    try {
      const locationPermission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const result = await check(locationPermission);
      return result === RESULTS.GRANTED || result === RESULTS.LIMITED;
    } catch {
      return false;
    }
  },
};

export default permissionUtils;