import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  Shadow,
  vec,
} from "@shopify/react-native-skia";

interface Props {
  radius: number;
  pressed: boolean;
}

export default function CircleButton({ radius, pressed }: Props) {
  const diameter = radius * 2;
  return (
    <Canvas style={{ width: diameter, height: diameter }}>
      <Circle r={radius} cx={radius} cy={radius}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(diameter, diameter)}
          colors={[
            pressed ? "#bbbfc7" : "#f5f5f9",
            pressed ? "#ffffff" : "#dadfe7",
          ]}
        />
        <Shadow dx={1} dy={1} blur={0.5} color={"white"} inner />
      </Circle>
      <Line
        p1={vec(radius - radius / 3, radius)}
        p2={vec(radius + radius / 3, radius)}
        style={"stroke"}
        strokeCap={"round"}
        strokeWidth={4}
        color={"#48319d"}
      />
      <Line
        p1={vec(radius, radius - radius / 3)}
        p2={vec(radius, radius + radius / 3)}
        style={"stroke"}
        strokeCap={"round"}
        strokeWidth={4}
        color={"#48319d"}
      />
    </Canvas>
  );
}
