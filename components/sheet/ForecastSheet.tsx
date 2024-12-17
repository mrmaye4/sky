import BottomSheet from "@gorhom/bottom-sheet";
import ForecastSheetBackground from "@/components/sheet/ForecastSheetBackground";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import ForecastControl from "@/components/sheet/elements/ForecastControl";
import Separator from "@/components/sheet/elements/Separator";
import ForecastScroll from "@/components/forecast/ForecastScroll";
import { useEffect, useState } from "react";
import { ForecastType } from "@/models/Weather";
import { hourly, weekly } from "@/data/ForecastData";
import { ScrollView, View } from "react-native";
import AirQualityWidget from "@/components/forecast/widgets/AirQualityWidget";
import UvIndexWidget from "@/components/forecast/widgets/UvIndexWidget";
import SunriseWidget from "@/components/forecast/widgets/SunriseWidget";
import RainFallWidget from "@/components/forecast/widgets/RainFallWidget";
import FeelsLikeWidget from "@/components/forecast/widgets/FeelsLikeWidget";
import HumidityWidget from "@/components/forecast/widgets/HumidityWidget";
import VisibilityWidget from "@/components/forecast/widgets/VisibilityWidget";
import PressureWidget from "@/components/forecast/widgets/PressureWidget";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useForecastSheetPosition } from "@/context/ForecastSheetContext";

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();

  const [selectedForecastType, setSelectedForecastType] =
    useState<ForecastType>(ForecastType.Hourly);
  const smallWidgetSize = width / 2 - 20;
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const secondSnapPoint = height * (parseFloat(snapPoints[1]) / 100);
  const minY = height - secondSnapPoint;
  const maxY = height - firstSnapPoint;
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
  const animatedPosition = useForecastSheetPosition();
  const currentPosition = useSharedValue(0);
  const translateXHourly = useSharedValue(0);
  const translateXWeekly = useSharedValue(width);

  const animatedHourlyStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXHourly.value }],
    };
  });
  const animatedWeeklyStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXWeekly.value }],
    };
  });

  useEffect(() => {
    if (selectedForecastType === ForecastType.Weekly) {
      translateXHourly.value = withTiming(-width);
      translateXWeekly.value = withTiming(-width);
    } else {
      translateXHourly.value = withTiming(0);
      translateXWeekly.value = withTiming(width);
    }
  }, [selectedForecastType]);

  const normalizePosition = (position: number) => {
    "worklet";
    return ((position - maxY) / (maxY - minY)) * -1;
  };

  useAnimatedReaction(
    () => {
      return currentPosition.value;
    },
    (cv) => {
      animatedPosition.value = normalizePosition(cv);
    },
  );

  return (
    <BottomSheet
      snapPoints={snapPoints}
      animatedPosition={currentPosition}
      animateOnMount={false}
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <ForecastControl onPress={(type) => setSelectedForecastType(type)} />
      <Separator width={width} height={3} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={{ flexDirection: "row" }}>
          <Animated.View style={[animatedHourlyStyles]}>
            <ForecastScroll
              forecasts={hourly}
              capsuleWidth={capsuleWidth}
              capsuleHeight={capsuleHeight}
              capsuleRadius={capsuleRadius}
            />
          </Animated.View>
          <Animated.View style={[animatedWeeklyStyles]}>
            <ForecastScroll
              forecasts={weekly}
              capsuleWidth={capsuleWidth}
              capsuleHeight={capsuleHeight}
              capsuleRadius={capsuleRadius}
            />
          </Animated.View>
        </View>
        <View style={{ flex: 1, paddingTop: 30, paddingBottom: 50 }}>
          <AirQualityWidget width={width - 30} height={150} />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: 15,
              gap: 10,
            }}
          >
            <UvIndexWidget width={smallWidgetSize} height={smallWidgetSize} />
            <SunriseWidget width={smallWidgetSize} height={smallWidgetSize} />
            <RainFallWidget width={smallWidgetSize} height={smallWidgetSize} />
            <FeelsLikeWidget width={smallWidgetSize} height={smallWidgetSize} />
            <HumidityWidget width={smallWidgetSize} height={smallWidgetSize} />
            <VisibilityWidget
              width={smallWidgetSize}
              height={smallWidgetSize}
            />
            <PressureWidget width={smallWidgetSize} height={smallWidgetSize} />
          </View>
        </View>
      </ScrollView>
    </BottomSheet>
  );
}
