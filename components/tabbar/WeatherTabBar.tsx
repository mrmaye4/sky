import { StyleSheet, View } from "react-native";
import ArcComponents from "@/components/tabbar/elements/ArcComponents";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import TabBarItems from "@/components/tabbar/elements/TabBarItems";

export default function WeatherTabBar() {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();

  return (
    <View
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}
    >
      <ArcComponents height={TabBarHeight} width={width} />
      <TabBarItems />
    </View>
  );
}
