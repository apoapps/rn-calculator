

import { View } from 'react-native';

import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style='light' />
    </View>
  );
}
