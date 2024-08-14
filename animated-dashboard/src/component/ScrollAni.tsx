import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const RotatingBox: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();

  useFrame(() => {
    const y = scroll.offset * Math.PI * 2;
    if (ref.current) {
      ref.current.rotation.x = y;
      ref.current.rotation.y = y;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const ScrollAnimation: React.FC = () => {
  return (
    <Canvas>
      <ScrollControls pages={2}>
        <ambientLight intensity={0.5} />
        <RotatingBox />
      </ScrollControls>
    </Canvas>
  );
};

export default ScrollAnimation;