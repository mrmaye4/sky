import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { SharedValue } from "react-native-reanimated";
import { WeatherData } from "@/models/Weather";
import { currentWeather } from "@/data/CurrentWeather";
import { hourly, weekly } from "@/data/ForecastData";

interface Props {
  children: ReactNode;
}
interface PropsContextType {
  weatherData: WeatherData;
  setWeatherData: Dispatch<SetStateAction<WeatherData>>;
}
const defaultWeatherData = {
  currentWeather: currentWeather,
  hourlyForecast: hourly,
  weeklyForecast: weekly,
};

export const WeatherDataContext = createContext<PropsContextType>({
  weatherData: defaultWeatherData,
  setWeatherData: () => {},
});

export const WeatherDataProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] =
    useState<WeatherData>(defaultWeatherData);

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export const useWeatherData = (): PropsContextType => {
  const context = useContext(WeatherDataContext);
  if (!context) {
    throw new Error(
      "useForecastSheetPosition must be used within a Forecast Sheet Provider",
    );
  }

  return context;
};
