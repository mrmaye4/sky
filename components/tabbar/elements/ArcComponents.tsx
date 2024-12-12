import { Canvas, LinearGradient, Path, vec } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";

interface Props {
  width: number;
  height: number;
}

export default function ArcComponents({ width, height }: Props) {
  const arcPath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0 L ${width} ${height} L 0 ${height} Z`;
  const arcBoard = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0`;
  return (
    <Canvas style={{ height, ...StyleSheet.absoluteFillObject }}>
      <Path path={arcPath}>
        <LinearGradient
          start={vec(width / 2, 0)}
          end={vec(width / 2, height)}
          colors={["rgba(58,58,106, 1)", "rgba(37,36,76, 1)"]}
        />
      </Path>
      <Path
        path={arcBoard}
        strokeWidth={0.5}
        style={"stroke"}
        color={"rgba(117,130,244,0.5)"}
      />
    </Canvas>
  );
}
