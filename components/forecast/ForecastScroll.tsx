import { ScrollView, View } from "react-native";
import { Forecast } from "@/models/Weather";
import ForecastCapsule from "@/components/forecast/ForecastCapsule";

interface Props {
  forecasts: Forecast[];
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleRadius: number;
}

export default function ForecastScroll({
  forecasts,
  capsuleRadius,
  capsuleWidth,
  capsuleHeight,
}: Props) {
  return (
    <ScrollView
      horizontal
      style={{
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
        height: capsuleHeight + 30,
        maxHeight: capsuleHeight + 30,
      }}
    >
      <View
        style={{
          height: capsuleHeight,
          flexDirection: "row",
          gap: 12,
        }}
      >
        {forecasts.map((forecast, key) => (
          <ForecastCapsule
            key={key}
            forecast={forecast}
            width={capsuleWidth}
            height={capsuleHeight}
            radius={capsuleRadius}
          />
        ))}
      </View>
    </ScrollView>
  );
}
