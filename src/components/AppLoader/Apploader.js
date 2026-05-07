import { ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

// Importing theme for color usage
import { Theme } from '../../libs';

/**
 * AppLoader Component
 * 
 * This component displays a loading indicator with a custom color and size scaling.
 * It can be used anywhere in the app to indicate loading states.
 */
function AppLoader() {
    return (
        <ActivityIndicator
            color={Theme.colors.white} // Set custom loader color
            style={styles.customStyle} 
        />
    );
}

export default AppLoader;

/**
 * Styles
 * 
 * Styling for the AppLoader component.
 */
const styles = StyleSheet.create({
    customStyle: {
        transform: [{ scale: 1.3 }], // Scale up the loader size
    },
});
