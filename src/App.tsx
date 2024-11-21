import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import vertexShader from "./shaders/vertex.vert";
import fragmentShader from "./shaders/fragment.frag";

export default function App() {
  return (
    <Canvas>
      <mesh>
        <planeGeometry />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
