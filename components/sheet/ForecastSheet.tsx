import BottomSheet from "@gorhom/bottom-sheet";
import ForecastSheetBackground from "@/components/sheet/ForecastSheetBackground";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import ForecastControl from "@/components/sheet/elements/ForecastControl";
import Separator from "@/components/sheet/elements/Separator";
import ForecastScroll from "@/components/forecast/ForecastScroll";
import { useState } from "react";
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

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();

  const [selectedForecastType, setSelectedForecastType] =
    useState<ForecastType>(ForecastType.Hourly);
  const smallWidgetSize = width / 2 - 20;
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;

  return (
    <BottomSheet
      snapPoints={snapPoints}
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
        <ForecastScroll
          forecasts={
            selectedForecastType === ForecastType.Hourly ? hourly : weekly
          }
          capsuleWidth={capsuleWidth}
          capsuleHeight={capsuleHeight}
          capsuleRadius={capsuleRadius}
        />
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
