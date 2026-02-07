import { useState, useEffect } from 'react'; // <-- Add useEffect here
import './Slider.css';
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import Svg_computer from './svg-assets/computer.svg';
import Svg_play from './svg-assets/play-pause.svg';
import Svg_settings from './svg-assets/settings.svg';
import Svg_palette from './svg-assets/palette.svg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(33);
  

  // Переменная меняющяяся в зависимости от размера экрана, используется в функции после нажатия стрелки
  const [value, setValue] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setValue(1);
      } else if (window.innerWidth < 1400) {
        setValue(2);
      } else {
        setValue(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  //Насколько далеко двигать в зависимости от экрана
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setTranslateValue(100); // 100% for mobile
    } else if (window.innerWidth < 1400) {
      setTranslateValue(50); // 50% for tablet
    } else {
      setTranslateValue(33); // 33% for desktop
    }
  };

  handleResize(); // Set initial value
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  
  // Карты и их данные
  const sliderItems = [
    { id: 1, header : 'АДАПНИВНОСТЬ', content: 'Адаптивная и отзывчивая верстка под все девайсы, от телефонов до мониторов', logo: Svg_computer  },
    { id: 2, header : 'АНИМАЦИЯ',content: 'Плавная и интерактивная анимация', logo: Svg_play  },
    { id: 3, header : 'API',content: 'работа с api', logo: Svg_settings  },
    { id: 4, header : 'ДИЗАЙН',content: 'работа с дизайном', logo: Svg_palette  },
    { id: 5, header : '',content: 'Slide 5', logo: "./src/assets/react.svg"  },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sliderItems.length - value ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderItems.length - value : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
        ‹
      </button>
      
      <div className="slider-wrapper">
        <div 
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * translateValue}%)`
          }}
        >
          {sliderItems.map((item) => (
            <div
              key={item.id}
              className="slider-item"
            >
              <div className='test'><h1>{item.header}</h1> <p>{item.content}</p></div>

                <motion.img
            initial={{
                translateY: -25,
                opacity: 0,
            }}
            whileInView={{
                opacity:1,
                translateY: 0,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: false,
            }} 
            src={item.logo} className='svg-logo'>
            </motion.img>
            </div>
          ))}
        </div>
      </div>

      <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Slider;