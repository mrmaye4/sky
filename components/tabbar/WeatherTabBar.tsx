import { StyleSheet } from "react-native";
import ArcComponents from "@/components/tabbar/elements/ArcComponents";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import TabBarItems from "@/components/tabbar/elements/TabBarItems";
import { BlurView } from "expo-blur";

export default function WeatherTabBar() {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();

  return (
    <BlurView
      intensity={50}
      tint={"dark"}
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}
    >
      <ArcComponents height={TabBarHeight} width={width} />
      <TabBarItems />
    </BlurView>
  );
}
