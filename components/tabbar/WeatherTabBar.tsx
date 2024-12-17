import { StyleSheet, View } from "react-native";
import ArcComponents from "@/components/tabbar/elements/ArcComponents";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import TabBarItems from "@/components/tabbar/elements/TabBarItems";
import { BlurView } from "expo-blur";
import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function WeatherTabBar() {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();

  const animatedPosition = useForecastSheetPosition();
  const animatedViewStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedPosition.value,
          [0, 1],
          [0, TabBarHeight + 20],
        ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[
        { ...StyleSheet.absoluteFillObject, top: height - TabBarHeight },
        animatedViewStyle,
      ]}
    >
      <BlurView
        intensity={50}
        tint={"dark"}
        style={{
          height: TabBarHeight,
          ...StyleSheet.absoluteFillObject,
        }}
      >
        <ArcComponents height={TabBarHeight} width={width} />
        <TabBarItems />
      </BlurView>
    </Animated.View>
  );
}
