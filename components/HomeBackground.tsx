import React from "react";
import {
  ImageBackground,
  useWindowDimensions,
  StyleSheet,
  Image,
  ScaledSize,
  View,
} from "react-native";
import {
  Canvas,
  Line,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function HomeBackground() {
  const dimensions = useApplicationDimensions();
  const { width, height } = dimensions;
  const myStyle = styles(dimensions);
  const smokeHeight = 0.6 * height;
  const smokeOffset = 0.4 * height;

  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Canvas style={{ flex: 1 }}>
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
            colors={["#2e335a", "#1c1b33"]}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require("../assets/home/Background.png")}
        resizeMode={"cover"}
        style={{ height: "100%" }}
      >
        <Canvas
          style={{
            height: smokeHeight,
            ...StyleSheet.absoluteFillObject,
            top: smokeOffset,
          }}
        >
          <Rect rect={undefined} x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </Canvas>
        <Image
          source={require("../assets/home/House.png")}
          resizeMode={"cover"}
          style={myStyle.houseImage}
        />
      </ImageBackground>
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
