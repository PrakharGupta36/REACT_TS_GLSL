import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import vertexShader from "../shaders/vertex.vert";
import fragmentShader from "../shaders/fragment.frag";
import { useTexture } from "@react-three/drei";

export default function Plane() {
  const plane = useRef<THREE.Mesh>(null);
  const texture = useTexture("/img.jpg");

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_texture: {
        value: texture,
      },
    }),
    [texture]
  );

  useFrame((state) => {
    const { clock } = state;
    if (plane.current) {
      const material = plane.current.material as THREE.RawShaderMaterial;
      material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={plane} rotation={[0, 0, 0]}>
      <planeGeometry args={[7, 5, 64, 64]} />
      <shaderMaterial
        side={THREE.DoubleSide}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
