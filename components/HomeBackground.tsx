import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  ScaledSize,
  StyleSheet,
  View,
} from "react-native";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedImgBg = Animated.createAnimatedComponent(ImageBackground);

export default function HomeBackground() {
  const dimensions = useApplicationDimensions();
  const animatedPosition = useForecastSheetPosition();
  const { width, height } = dimensions;
  const myStyle = styles(dimensions);
  const smokeHeight = 0.6 * height;
  const smokeOffset = 0.4 * height;
  const leftBkgColor = useSharedValue("#2e335a");
  const rightBkgColor = useSharedValue("#1c1b33");
  const bkgColors = useDerivedValue(() => {
    if (Platform.OS) {
      leftBkgColor.value = interpolateColor(
        animatedPosition.value,
        [0, 1],
        ["#2e335a", "#422e5a"],
      );
    } else {
      leftBkgColor.value = animatedPosition.value > 0.5 ? "#422e5a" : "#2e335a";
    }

    return [leftBkgColor.value, rightBkgColor.value];
  });

  const animatedImgBgStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedPosition.value ?? 0,
          [0, 1],
          [0, -height],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));
  const animatedCanvasSmokeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedPosition.value ?? 0,
      [0, 0.1],
      [1, 0],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
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
            colors={bkgColors}
          />
        </Rect>
      </Canvas>
      <AnimatedImgBg
        source={require("../assets/home/Background.png")}
        resizeMode={"cover"}
        style={[{ height: "100%" }, animatedImgBgStyle]}
      >
        <Animated.View
          style={[
            {
              height: smokeHeight,
              ...StyleSheet.absoluteFillObject,
              top: smokeOffset,
            },
            animatedCanvasSmokeStyle,
          ]}
        >
          <Canvas>
            <Rect
              rect={undefined}
              x={0}
              y={0}
              width={width}
              height={smokeHeight}
            >
              <LinearGradient
                start={vec(width / 2, 0)}
                end={vec(width / 2, smokeHeight)}
                colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
                positions={[-0.02, 0.54]}
              />
            </Rect>
          </Canvas>
        </Animated.View>

        <Image
          source={require("../assets/home/House.png")}
          resizeMode={"cover"}
          style={myStyle.houseImage}
        />
      </AnimatedImgBg>
    </View>
  );
}

const styles = ({ width }: ScaledSize) =>
  StyleSheet.create({
    houseImage: {
      width,
      height: width,
      ...StyleSheet.absoluteFillObject,
      top: "36%",
    },
  });
