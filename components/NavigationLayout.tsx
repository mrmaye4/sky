import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { eventEmitter } from "@/utils/EventEmitter";
import { fetchWeatherData, getLocationData } from "@/services/LocationService";
import { useWeatherData } from "@/context/WeatherDataContext";

export default function NavigationLayout() {
  const { setWeatherData } = useWeatherData();

  const handleLocationEvent = async () => {
    const location = await getLocationData();
    if (location) {
      const { latitude, longitude } = location;
      const weather = await fetchWeatherData(latitude, longitude);
      setWeatherData(weather);
    }
  };

  useEffect(() => {
    const listener = eventEmitter.addListener("locationEvent", async () => {
      await handleLocationEvent();
    });
    return () => listener.remove();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="weather" />
    </Stack>
  );
}
