import { Pressable, StyleSheet, View } from "react-native";
import MapIcon from "@/components/tabbar/icons/MapIcon";
import ListIcon from "@/components/tabbar/icons/ListIcon";
import TrapezoidBackground from "@/components/tabbar/elements/TrapezoidBackground";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import CircleButton from "@/components/tabbar/elements/CircleButton";
import { useRouter } from "expo-router";
import { eventEmitter } from "@/utils/EventEmitter";

export default function TabBarItems() {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.68;
  const trapezoidHeight = height * 0.12;
  const circleRadius = (trapezoidHeight * 0.51) / 2;
  const buttonCenterX = width / 2 - circleRadius;
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 32,
      }}
    >
      <Pressable onPress={() => eventEmitter.emit("locationEvent")}>
        <MapIcon />
      </Pressable>
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          left: buttonCenterX,
          width: circleRadius * 2,
          height: circleRadius * 2,
          top: 12,
          borderRadius: circleRadius,
        }}
      >
        {({ pressed }) => (
          <CircleButton radius={circleRadius} pressed={pressed} />
        )}
      </Pressable>
      <Pressable onPress={() => router.push("/weather")}>
        <ListIcon />
      </Pressable>
    </View>
  );
}
