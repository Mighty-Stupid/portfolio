import { Canvas, useThree } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'; // Добавили useState
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import './Truck.css';
import Svg_fill from '../svg-assets/fill.svg';

function Model({ whiteMaterialColor }) { // Добавили пропс для цвета
  const { scene, animations, cameras } = useGLTF('/Truck-rig-colored.glb');
  const mixerRef = useRef();
  const groupRef = useRef();
  const truckMaterial = useRef(null)
  const { camera } = useThree();

  // Находим материал при загрузке модели
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.name === 'orange') {
        truckMaterial.current = child.material;
      }
    });
  }, [scene]);

  // Изменяем цвет материала при изменении whiteMaterialColor
  useEffect(() => {
    if (truckMaterial.current) {
      truckMaterial.current.color.set(whiteMaterialColor);
    }
  }, [whiteMaterialColor]);

  // Set up Blender camera if it exists
  useEffect(() => {
    if (cameras && cameras.length > 0) {
      // Assuming the first camera is the one you want to use
      const blenderCamera = cameras[0];
      
      // Copy position and rotation
      camera.position.copy(blenderCamera.position);
      camera.rotation.copy(blenderCamera.rotation);
      
      // Copy camera properties based on type
      if (blenderCamera.isPerspectiveCamera) {
        camera.fov = blenderCamera.fov;
        camera.aspect = blenderCamera.aspect;
        camera.near = blenderCamera.near;
        camera.far = blenderCamera.far;
        camera.updateProjectionMatrix();
      }
      // Add similar logic for OrthographicCamera if needed
    }
  }, [cameras, camera]);


  // Animation setup
  useEffect(() => {
    if (animations && animations.length && groupRef.current) {
      mixerRef.current = new THREE.AnimationMixer(groupRef.current);
      animations.forEach((clip) => {
        const action = mixerRef.current.clipAction(clip);
        action.play();
      });
    }
  }, [animations]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });


  return (
    <group ref={groupRef}>
      <primitive 
        object={scene}
        position={[1, 1, 1]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

function Truck() {
  const [whiteMaterialColor, setWhiteMaterialColor] = useState('#ff8e31'); // Добавили состояние для цвета

    const colorPalette = [
    '#ff8e31', // оранжевый (начальный)
    '#ff4757', // красный
    '#2ed573', // зеленый
    '#1e90ff', // синий
    '#ff6b81', // розовый
    '#ffa502', // оранжевый темный
    '#3742fa', // фиолетовый
    '#70a1ff', // голубой
    '#7bed9f', // салатовый
    '#ff6348', // коралловый
  ];
  
  const changeColor = () => {
    // Выбираем случайный цвет из палитры
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    const randomColor = colorPalette[randomIndex];
    setWhiteMaterialColor(randomColor);
  };

  return (
    <div className='Truck'>
      {/* Добавили кнопку */}

      <img src={Svg_fill} className='color-change-btn' onClick={changeColor} alt=""></img>
      
      <Canvas>
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 10]} />
        {/* Передаем цвет в компонент Model */}
        <Model whiteMaterialColor={whiteMaterialColor} />
      </Canvas>
    </div>
  );
}

export default Truck;