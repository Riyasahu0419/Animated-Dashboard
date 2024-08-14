import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBackground: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      const scrollFactor = scroll.offset * Math.PI * 4;
      ref.current.rotation.y = scrollFactor;
      ref.current.position.z = -5 + scroll.offset * 10;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -5]}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial color="#3498db" wireframe />
    </mesh>
  );
};

const BackgroundAni: React.FC = () => {
  return (
    <Canvas>
      <ScrollControls pages={3}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <AnimatedBackground />
      </ScrollControls>
    </Canvas>
  );
};

export default BackgroundAni;