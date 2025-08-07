import { useRef } from "react";
import * as THREE from "three";
import vertexShader from "../shaders/vertex.vert";
import fragmentShader from "../shaders/fragment.frag";

export default function Plane() {
  const plane = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={plane} rotation={[0, 0, 0]}>
      <planeGeometry args={[3, 3, 64, 64]} />
      <shaderMaterial
        side={THREE.DoubleSide}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}