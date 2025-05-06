'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function RotatingCube() {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[2, 2, 5]} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
