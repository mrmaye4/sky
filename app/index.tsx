import HomeBackground from "@/components/HomeBackground";
import React from "react";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";
import WeatherInfo from "@/components/section/WeatherInfo";
import { currentWeather } from "@/data/CurrentWeather";
import ForecastSheet from "@/components/sheet/ForecastSheet";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <ForecastSheet />
      <WeatherTabBar />
    </>
  );
}
