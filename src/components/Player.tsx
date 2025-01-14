import { RigidBody } from "@react-three/rapier";

export default function Player() {
  return (
    <RigidBody
      colliders='cuboid'
      type='dynamic'
      gravityScale={0}
      position={[0, -3, 0]}
    >
      <mesh>
        <boxGeometry args={[1.5, 0.45, 0.35]} />
        <meshNormalMaterial />
      </mesh>
    </RigidBody>
  );
}
