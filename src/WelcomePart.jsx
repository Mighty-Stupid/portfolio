import './WelcomePart.css'
import Svg_curve from './svg-assets/Svg_curve';
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";

function WelcomeP(){
    return(
        <>
        <div className="Parent" id='main' >
            <div className='imagediv'>
                <img src='hand5.png'></img>
            </div>
            <div className='text1'>
                <h1>Дизайн</h1>
                <Svg_curve/>
                <p>Дизайнерские фоны с использованием фотошопа и css</p>
            </div>
            <div className='text2'>
                <h1>Верстка.</h1>
                <p>Дизайнерские фоны с использованием фотошопа и css</p>
            </div>
        </div>
        </>
    )
}

export default WelcomeP;