import { Canvas } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import './Gear.css'

function ModelGear() {
  const { scene } = useGLTF('/gear.glb');
  const ref = useRef();
  const rotationSpeed = useRef(0); // скорость прокрутки

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) { // deltaY при прокрутке вверх +, вниз -
        rotationSpeed.current = 0.05;
      } else {
        rotationSpeed.current = -0.05;
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += rotationSpeed.current;
      // Трение что-бы снизить скорость (и вообще что-бы не крутился вечность)
      rotationSpeed.current *= 0.97;
    }
  });

  return (
    <primitive
      object={scene.clone()} //clone позволяет дублировать модель (испольозвать несколько раз)
      ref={ref}
      position={[0, 0, 0]}
      scale={[3.75, 3.75, 3.75]}
      rotation={[0, 0.8, 0]}
    />
  );
}

function Gear() {
  return (
    <div className='Gear'>
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 5, 5]} />
      <ModelGear />
    </Canvas>
    </div>
  );
};


export default Gear
