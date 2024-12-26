import { StyleSheet } from "react-native";
import {
  AnimatedProp,
  Canvas,
  Color,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";

interface Props {
  colors?: AnimatedProp<Color[]>;
}

export const BackgroundGradient = ({
  colors = ["#2e335a", "#1c1b33"],
}: Props) => {
  const { width, height } = useApplicationDimensions();
  return (
    <Canvas style={{ ...StyleSheet.absoluteFillObject }}>
      <Rect
        rect={undefined}
        x={0}
        y={0}
        height={height}
        width={width}
        color={"white"}
      >
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={colors}
        />
      </Rect>
    </Canvas>
  );
};
