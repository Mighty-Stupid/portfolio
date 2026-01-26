import { Canvas } from '@react-three/fiber'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'; //Для экспортирования glb файлов из блендера
import './Computer.css'


function Model() {
  const { scene } = useGLTF('/Computer.glb');
  const ref = useRef();


    useFrame(() => {
    if (ref.current) {

      ref.current.rotation.y += 0.003;
      
    }
  });


  return (
    <primitive 
      object={scene}
      ref={ref}
      position={[0, -0.8, 0.2]}
      scale={[0.8, 0.8, 0.8]}
      rotation={[0.8, 1.1, 0]}
    />
  );
}


function Computer() {
return (
<Canvas className='Comp' style={{
        width: '400px',
        height: '400px',
      }}>
<ambientLight intensity={2} />
<directionalLight position={[0, 0, 0]} />
<Model />
</Canvas>
);
}

export default Computer