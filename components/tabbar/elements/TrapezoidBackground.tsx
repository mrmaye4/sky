import {
  Canvas,
  FitBox,
  LinearGradient,
  Path,
  rect,
  vec,
} from "@shopify/react-native-skia";

interface Props {
  width: number;
  height: number;
}

export default function TrapezoidBackground({ width, height }: Props) {
  return (
    <Canvas style={{ width, height }}>
      <FitBox src={rect(0, 0, 266, 100)} dst={rect(0, 0, width, height)}>
        <Path
          style={"fill"}
          path={
            "M112 0H154C186 0 195.501 24.1398 205.733 48.6985C216.325 74.1247 227 100 262 100H4.00031C39.0003 100 49.6756 74.1247 60.2681 48.6985C70.4991 24.1398 80.0003 0 112 0Z"
          }
        >
          <LinearGradient
            start={vec(width / 2, height)}
            end={vec(width / 2, 0)}
            colors={["#262C51", "#3E3F74"]}
          />
        </Path>
        <Path
          path={
            "M112 0.25H154C169.923 0.25 180.23 6.24974 187.838 15.3006C195.21 24.0697 200.053 35.7041 204.994 47.575C205.163 47.9813 205.332 48.3879 205.502 48.7947L205.605 49.0418C210.863 61.6652 216.18 74.4274 224.525 84.0479C231.573 92.1732 240.777 98.0545 253.909 99.75H12.0917C25.2238 98.0545 34.428 92.1732 41.4759 84.0479C49.8208 74.4273 55.1373 61.6651 60.3959 49.0417L60.4988 48.7947C60.6683 48.3879 60.8375 47.9813 61.0066 47.5751C65.9476 35.7041 70.7902 24.0697 78.1622 15.3006C85.771 6.24974 96.0774 0.25 112 0.25Z"
          }
          style={"stroke"}
          strokeWidth={0.5}
          color={"#7582F4"}
        />
      </FitBox>
    </Canvas>
  );
}
