import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  // import {appleAuth} from '@invertase/react-native-apple-authentication';
  export const googleConfig = () => {
    GoogleSignin.configure({
      webClientId:
        '771463035366-pde1vbg3jpgia4eharcjctu0pkp25aib.apps.googleusercontent.com',
    });
  };
  export const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo?.data?.idToken) {
        return {
          provider: 'google',
          idToken: userInfo?.data?.idToken,
          name: userInfo?.data?.user?.name,
          email: userInfo?.data?.user?.email,
        };
      }
      return null;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google sign-in cancelled');
      } else {
        console.error('Google Sign-In Error:', error);
      }
      return null;
    }
  };