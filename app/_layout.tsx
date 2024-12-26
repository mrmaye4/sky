import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { WeatherDataProvider } from "@/context/WeatherDataContext";
import NavigationLayout from "@/components/NavigationLayout";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "SF-Thin": require("../assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-Regular": require("../assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-Semibold": require("../assets/fonts/SF-Pro-Display-Thin.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <WeatherDataProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationLayout />
          <StatusBar style={"light"} />
        </GestureHandlerRootView>
      </WeatherDataProvider>
    </SafeAreaProvider>
  );
}
