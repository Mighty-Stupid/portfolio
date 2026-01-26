import { cover } from 'three/src/extras/TextureUtils.js';
import './App.css'
import WelcomeP from './WelcomePart';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Menu from './Menu';
import Rundown from './Rundown'

function App() {

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
return (
  <>
  <div>

<WelcomeP/>
<Rundown/>
<Menu/>

  </div>
  </>
);
}

export default App;