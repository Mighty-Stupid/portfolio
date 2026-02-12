import './Menu.css'
import { useState, useEffect, useRef } from 'react';
import Portf from './svg-assets/Portf.svg';

function Menu(){
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]); //Если нажали куда-то кроме самой кнопки и его списка, убери список
    
    return(
        <div className='MenuDiv'>
            <div className='icon-menu'>
                <a href='#main'><img src={Portf} alt="Portfolio"/></a>
            </div>

            <button className='menu-toggle' onClick={() => setIsOpen(!isOpen)}
                aria-label='Toggle'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
            <ul className={isOpen ? 'open' : ''} ref={menuRef}>
                <a href='#footer'><li>ДОПОЛНИТЕЛЬНО</li></a>
                <a href='#Blender-div'><li>3D</li></a>
                <a href='#Slider'><li>НАВЫКИ</li></a>
            </ul>
        </div>
    )
}

export default Menu;