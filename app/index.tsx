import HomeBackground from "@/components/HomeBackground";
import React from "react";
import { StatusBar } from "expo-status-bar";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";
import WeatherInfo from "@/components/section/WeatherInfo";
import { currentWeather } from "@/data/CurrentWeather";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <WeatherTabBar />
      <StatusBar style={"light"} />
    </>
  );
}
