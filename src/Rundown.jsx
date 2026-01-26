import './Rundown.css'
import { cover } from 'three/src/extras/TextureUtils.js';
import Computer from './blender-assets/Computer';
import Gear from './blender-assets/Gear';
import SvgCard from './SvgCard';
import Truck from './blender-assets/Truck';
import { color } from 'three/tsl';
import React, {useEffect, useRef} from "react";
import Svg_button from './svg-assets/svg_button';
import Slider from './Slider';

import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";


// Считаем высоту дочерних элементов и даем его родителю (все дочерние absolute)
function Rundown(){
    window.addEventListener('load', () => {
  const parent = document.querySelector('.Blender-div');
  const children = parent.querySelectorAll('div');
  let totalHeight = 0;

  children.forEach(child => {
    totalHeight = Math.max(totalHeight, child.offsetTop + child.offsetHeight);
  });
  parent.style.height = totalHeight + 'px';
});



    return(
        <div className="Parent-rundown">
            <div className='Stack-header'>
            <motion.div className='ColorBlock2'
            initial={{
            scaleX: 1,
            }}
            whileInView={{
                scaleX: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            viewport={{
                once: true,
            }}
            ></motion.div>

            <h1>МОЙ СТАК</h1>

            </div>

            <motion.div
            initial={{
                opacity: 0,
                translateX: 50
            }}
            whileInView={{
                opacity: 1,
                translateX: 0
            }}
            transition={{
                duration: 0.5,
            }}
            viewport={{
                once: true,
            }}
             className='Stack-container'>
                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    text="HTML" 
                    imgClassName="ShapeHTML stuff"
                />
                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    text="CSS" 
                    imgClassName="ShapeCSS stuff"
                />
                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                    text="SASS" 
                    imgClassName="ShapeSASS stuff"
                />
                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    text="JavaScript" 
                    imgClassName="ShapeJAVAS stuff"
                />
                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    text="TypeScript" 
                    imgClassName="ShapeTYPES stuff"
                />
                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    text="React" 
                    imgClassName="ShapeREACT stuff"
                />

                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg"
                    text="Three.JS" 
                    imgClassName="ShapeThree_js stuff"
                />

                <SvgCard 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
                    text="Blender" 
                    imgClassName="ShapeBlender stuff"
                />

                <SvgCard
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                    text="Photoshop" 
                    imgClassName="ShapePhotoshop stuff"
                />
            </motion.div>

            

            <Slider/>
            <motion.div
            initial={{
                translateX: 50,
                opacity: 0
            }}
            whileInView={{
                translateX: 0,
                opacity:1
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }} 
            className='Blender-div'>
                <Gear/>
                <Truck/>
                <div className='Truck-text'>

                </div>   
            </motion.div>
            
            <footer></footer>
        </div>
    )
    
}

export default Rundown;