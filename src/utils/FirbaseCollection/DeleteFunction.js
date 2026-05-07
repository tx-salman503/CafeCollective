
import { dispatchLogout, } from "../../redux/slices/userSlice";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import toastUtils from "../toastUtil";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import appleAuth from "@invertase/react-native-apple-authentication";
// import appleAuth from '@invertase/react-native-apple-authentication';

// Note: This function should be used within a React component where useDispatch and state setters are available
export const handleDeleteAccount = async (user, password, dispatch, setDeleteError, setIsDeleting, setShowDeleteModal) => {
  try {
    setDeleteError(''); // Clear previous errors
    setIsDeleting(true); // Set deleting state to true
    console.log('Starting account deletion for user:', user?.uid, 'Provider:', user?.provider);

    const result = await deleteUserAccount(user, password); // Call the delete account function

    setShowDeleteModal(false); // Hide the delete modal after successful deletion
    // dispatch(dispatchLogout(true)); // Dispatch logout to clear user data from Redux
    const fbu = auth().currentUser;


    if (result) {
      toastUtils.showSuccess('Success', 'Account deleted successfully');
      await firestore().collection('users').doc(user?.uid).delete();
      await fbu.delete();


      return true
    } else {
      toastUtils.showError('Authentication Failed', 'Invalid credentials provided.');


    }
  } catch (error) {
    console.error('Delete account error:', error?.message);

    if (error.code === 'auth/wrong-password' || error.message.includes('password') || error.message.includes('invalid-credential')) {
      setDeleteError('Incorrect password. Please try again.');
    } else if (error.message === 'Please log in again to confirm account deletion') {
      // Handle case where the user needs to log in again
      setShowDeleteModal(false);
      dispatch(dispatchLogout(true)); // Log the user out

    } else {
      setDeleteError(error.message || 'Failed to delete account. Please try again.');
      toastUtils.showError('Error', error.message || 'Failed to delete account');
    }
  } finally {
    setIsDeleting(false); // Set deleting state to false after completion
  }
};

export const deleteUserAccount = async (firebaseUser, password) => {
  try {
    const fbu = auth().currentUser;

    // Check for each authentication provider and reauthenticate accordingly
    // Support both 'authProvider' and 'provider' property names
    const provider = firebaseUser?.authProvider || firebaseUser?.provider || '';
    const providerLower = provider.toString().toLowerCase();

    if (providerLower === 'email') {
      const res = await reauthenticateUser(fbu, password);
      if (res) {
        return true
      }
    } else if (providerLower === 'google') {
      try {
        // Sign in with Google to get fresh credentials
        await GoogleSignin.hasPlayServices();
        const { data } = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(data?.idToken);
        await fbu.reauthenticateWithCredential(credential);
        console.log('Google reauthentication successful');
        return true
      } catch (googleError) {
        console.error('Google reauthentication error:', googleError);
        // If Google sign in fails, proceed without reauthentication for account deletion
        console.log('Proceeding with account deletion without reauthentication');
        return false
      }
    } else if (providerLower === 'apple') {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      const { identityToken, nonce } = appleAuthRequestResponse;
      if (!identityToken) {
        throw new Error('Unable to get Apple identity token for reauthentication');
      }
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
      await fbu.reauthenticateWithCredential(appleCredential);
      return true
    }

    // Delete user document from Firestore
    try {
      await firestore().collection('users').doc(firebaseUser.uid).delete();
      console.log('User document deleted from Firestore');
    } catch (e) {
      console.warn('Failed to delete Firestore user doc:', e);
    }

    // Delete user from Firebase Authentication
    try {
      await fbu.delete();
      console.log('User deleted from Firebase Authentication');
      toastUtils.showSuccess('Account Deleted', 'Your account has been deleted successfully');
    } catch (authError) {
      console.error('Failed to delete auth account:', authError?.code);

      // Handle requires-recent-login error
      if (authError?.code === 'auth/requires-recent-login') {
        throw new Error('Please log in again to confirm account deletion');
      }

      throw new Error('Failed to delete authentication account. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting account:', error);

    if (error.code === 'auth/requires-recent-login') {
      const errorMessage = 'Please log in again to confirm account deletion';
      toastUtils.showError('Authentication Required', errorMessage);
      throw new Error(errorMessage);
    }

    throw error; // Rethrow other errors to be handled in the component
  }
}

export const reauthenticateUser = async (firebaseUser, password) => {
  const credential = auth.EmailAuthProvider.credential(firebaseUser.email, password);
  try {
    const fbu = auth().currentUser;
    await fbu.reauthenticateWithCredential(credential);
    return true
  } catch (error) {
    throw new Error('Authentication failed. Please check your password.');
  }
}