import HomeBackground from "@/components/HomeBackground";
import React from "react";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";
import WeatherInfo from "@/components/section/WeatherInfo";
import ForecastSheet from "@/components/sheet/ForecastSheet";
import { ForecastSheetProvider } from "@/context/ForecastSheetContext";

export default function Home() {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo />
      <ForecastSheet />
      <WeatherTabBar />
    </ForecastSheetProvider>
  );
}
