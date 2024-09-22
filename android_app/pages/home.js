import { View, Text } from 'react-native';
import React from 'react';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'; // To show a loading screen until fonts are loaded

const Home = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text style={{ fontFamily: 'Poppins_400Regular' }}>home</Text>
    </View>
  );
};

export default Home;