import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation';
import Onbording7 from './src/components/OnbordingComponent/Onboding7/Onbording7';

function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <AppNavigation />
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
