import Toast from 'react-native-toast-message';

const toastUtils = {
  showSuccess: async (message) => {
    Toast.show({
      type: 'customToast', // Custom toast type
      text2: message,      // Only message
      position: 'bottom',
      visibilityTime: 3000,
      autoHide: true,
      bottomOffset: 40,
    });
  },

  showError: async (message) => {
    Toast.show({
      type: 'customToast', // Custom toast type
      text2: message,
      position: 'bottom',
      visibilityTime: 3000,
      autoHide: true,
      bottomOffset: 40,
    });
  },

  showInfo: async (message) => {
    Toast.show({
      type: 'customToast', // Custom toast type
      text2: message,
      position: 'bottom',
      visibilityTime: 3000,
      autoHide: true,
      bottomOffset: 40,
    });
  },
};

export default toastUtils;
