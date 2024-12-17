import { View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function BasicAnimations() {
  const SIZE = 200;
  const scale = useSharedValue(0);
  const borderRadius = useSharedValue(0);
  const squareCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
        { translateY: interpolate(borderRadius.value, [0, 1], [-300, 100]) },
      ],
      borderRadius: borderRadius.value * SIZE,
    };
  });

  useEffect(() => {
    scale.value = withRepeat(withSpring(2), -1, true);
    borderRadius.value = withRepeat(withSpring(2), -1, true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "red" },
          squareCircleStyle,
        ]}
      ></Animated.View>
    </View>
  );
}
