import { ImageSourcePropType } from "react-native";
import { Forecast, ForecastType, WeatherType } from "@/models/Weather";

const hour = 3600000; // one hour in milliseconds
export const hourly: Forecast[] = [
  {
    date: new Date(Date.now() - hour),
    weather: WeatherType.Sunny,
    probability: 30,
    temperature: 19,
    high: 24,
    low: 18,
    type: ForecastType.Hourly,
    location: "Montreal, Canada",
    icon: require("../assets/forecast/sun_rain.png"),
  },
  {
    date: new Date(),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Hourly,
    icon: require("../assets/forecast/rain.png"),
  },
  {
    date: new Date(Date.now() + hour),
    weather: WeatherType.Windy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Hourly,
    icon: require("../assets/forecast/rain.png"),
  },
  {
    date: new Date(Date.now() + hour * 2),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 18,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Hourly,
    icon: require("../assets/forecast/rain.png"),
  },
  {
    date: new Date(Date.now() + hour * 3),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Hourly,
    icon: require("../assets/forecast/rain.png"),
  },
  {
    date: new Date(Date.now() + hour * 4),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Hourly,
    icon: require("../assets/forecast/rain.png"),
  },
  // ... add more forecasts if needed
];

const day = 86400000; // one day in milliseconds

export const weekly: Forecast[] = [
  {
    date: new Date(Date.now()),
    weather: WeatherType.Rainy,
    probability: 30,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/rain.png"),
  },
  {
    date: new Date(Date.now() + day),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/windy.png"),
  },
  {
    date: new Date(Date.now() + day * 2),
    weather: WeatherType.Stormy,
    probability: 100,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/rain.png"),
  },
  {
    date: new Date(Date.now() + day * 3),
    weather: WeatherType.Stormy,
    probability: 50,
    temperature: 18,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/rain.png"),
  },
  {
    date: new Date(Date.now() + day * 4),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/windy.png"),
  },
  {
    date: new Date(Date.now() + day * 5),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/rain.png"),
  },
];
export const ForecastList: Forecast[] = [
  {
    date: new Date(Date.now()),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 19,
    high: 24,
    low: 18,
    location: "Montreal, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/rain_large.png"),
  },
  {
    date: new Date(Date.now()),
    weather: WeatherType.Windy,
    probability: 0,
    temperature: 20,
    high: 21,
    low: -19,
    location: "Toronto, Canada",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/wind_large.png"),
  },
  {
    date: new Date(Date.now()),
    weather: WeatherType.Showers,
    probability: 0,
    temperature: 13,
    high: 16,
    low: 8,
    location: "Tokyo, Japan",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/cloudy_large.png"),
  },
  {
    date: new Date(Date.now()),
    weather: WeatherType.Tornado,
    probability: 0,
    temperature: 23,
    high: 26,
    low: 16,
    location: "Tennessee, United States",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/tornado_large.png"),
  },
  {
    date: new Date(Date.now()),
    weather: WeatherType.Cloudy,
    probability: 0,
    temperature: 31,
    high: 36,
    low: 26,
    location: "Singapore, Singapore",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/rain_large.png"),
  },
  {
    date: new Date(Date.now()),
    weather: WeatherType.Rainy,
    probability: 0,
    temperature: 23,
    high: 26,
    low: 16,
    location: "Taipei, Taiwan",
    type: ForecastType.Weekly,
    icon: require("../assets/forecast/rain_large.png"),
  },
];
