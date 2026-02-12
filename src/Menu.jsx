import './Menu.css'
import { useState } from 'react';

function Menu(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className='MenuDiv'>
            <div className='icon-menu'></div>

            <button className='menu-toggle' onClick={() => setIsOpen(!isOpen)}
                aria-label='Toggle'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
            <ul className={isOpen ? 'open' : ''}>
                <li>ДОПОЛНИТЕЛЬНО</li>
                <li>3D</li>
                <li>НАВЫКИ</li>
            </ul>
        </div>
    )
}

export default Menu;