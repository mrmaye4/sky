import { StyleSheet } from "react-native";
import { DEGREE_SYMBOL } from "@/utils/Constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import { useWeatherData } from "@/context/WeatherDataContext";

export default function WeatherInfo() {
  const { weatherData } = useWeatherData();
  const {
    currentWeather: { city, temperature, condition, high, low },
  } = weatherData;
  const { top } = useSafeAreaInsets();
  const topMargin = 51;
  const weatherInfoMargin = top + topMargin;
  const animatedPosition = useForecastSheetPosition();

  const animatedViewStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedPosition.value,
          [0, 1],
          [0, -topMargin],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const animatedTempTxtStyle = useAnimatedStyle(() => {
    const fontFamily = animatedPosition.value > 0.5 ? "SF-Semibold" : "SF-Thin";
    return {
      fontFamily,
      opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [1, 0, 1]),
      fontSize: interpolate(animatedPosition.value, [0, 1], [96, 20]),
      lineHeight: interpolate(animatedPosition.value, [0, 1], [96, 20]),
      color: interpolateColor(
        animatedPosition.value,
        [0, 1],
        ["white", "rgba(235,235,245,0.6)"],
      ),
    };
  });

  const animatedMinMaxTxtStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedPosition.value, [0, 0.5], [1, 0]),
  }));

  const animatedSeparatorTxtStyle = useAnimatedStyle(() => {
    const display = animatedPosition.value > 0.5 ? "flex" : "none";
    return {
      display,
      opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [0, 0, 1]),
    };
  });

  const animatedTempConditionStyle = useAnimatedStyle(() => {
    const flexDirection = animatedPosition.value > 0.5 ? "row" : "column";
    return { flexDirection };
  });

  const animatedConditionTxtStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 0.5, 1],
            [0, -20, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        { alignItems: "center", marginTop: weatherInfoMargin },
        animatedViewStyle,
      ]}
    >
      <Animated.Text style={styles.cityText}>{city}</Animated.Text>
      <Animated.View
        style={[{ alignItems: "center" }, animatedTempConditionStyle]}
      >
        <Animated.View style={[{ flexDirection: "row" }]}>
          <Animated.Text style={[styles.temperatureText, animatedTempTxtStyle]}>
            {temperature}
            {DEGREE_SYMBOL}
          </Animated.Text>
        </Animated.View>
        <Animated.Text
          style={[styles.separatorStyle, animatedSeparatorTxtStyle]}
        >
          |
        </Animated.Text>
        <Animated.Text
          style={[styles.conditionText, animatedConditionTxtStyle]}
        >
          {condition}
        </Animated.Text>
      </Animated.View>
      <Animated.Text style={[styles.minMaxText, animatedMinMaxTxtStyle]}>
        H:{high}
        {DEGREE_SYMBOL} L:{low}
        {DEGREE_SYMBOL}
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cityText: {
    fontFamily: "SF-Regular",
    color: "white",
    fontSize: 34,
    lineHeight: 41,
  },
  separatorStyle: {
    fontFamily: "SF-Semibold",
    fontSize: 20,
    color: "rgba(235,235,245,0.6)",
    lineHeight: 20,
    marginHorizontal: 2,
    display: "none",
  },
  temperatureText: {
    fontFamily: "SF-Thin",
    color: "white",
    fontSize: 96,
    lineHeight: 96,
  },
  conditionText: {
    fontFamily: "SF-SemiBold",
    color: "rgba(235,235,245,0.6)",
    fontSize: 20,
    lineHeight: 20,
  },
  minMaxText: {
    fontFamily: "SF-SemiBold",
    color: "white",
    fontSize: 20,
    lineHeight: 20,
  },
});
