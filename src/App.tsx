import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Plane from "./components/Plane";

export default function App() {
  return (
    <Canvas style={{ background: "black" }}>
      <Plane />
      <OrbitControls />
    </Canvas>
  );
}