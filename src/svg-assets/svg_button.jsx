import { useEffect } from "react";
import "./svg_button.css";

function SvgButton() {
  useEffect(() => {
    // Set initial color
    document.documentElement.style.setProperty('--orange-color', '#FF8543');
    
    const svg = document.getElementById('Frame1');
    
    const handleClick = (e) => {
      if (document.documentElement.style.getPropertyValue('--orange-color') === '#FF8543') {
        document.documentElement.style.setProperty('--orange-color', '#4356ffff');
      } else {
        document.documentElement.style.setProperty('--orange-color', '#FF8543');
      }
    };
    
    if (svg) {
      svg.addEventListener('click', handleClick);
    }
    
    // Cleanup function to remove event listener
    return () => {
      if (svg) {
        svg.removeEventListener('click', handleClick);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <svg width="208" height="221" viewBox="60 40 208 221" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame1">
        <rect width="408" height="321"/>
        <g id="orange">
          <path id="orange1" opacity="0.85" d="M184.653 150.845C192.57 154.911 192.632 166.206 184.76 170.359L82.6263 224.239C75.3243 228.091 66.5391 222.826 66.4939 214.57L65.9093 107.932C65.864 99.6766 74.591 94.3152 81.9347 98.0871L184.653 150.845Z" />
        </g>
        <g id="reds">
          <path id="red2" opacity="0.85" d="M182.944 149.967C191.581 154.403 191.648 166.725 183.061 171.255L84.0839 223.47C76.1181 227.672 66.5342 221.928 66.4849 212.922L65.9183 109.58C65.8689 100.574 75.3892 94.7252 83.4006 98.84L182.944 149.967Z" />
          <path id="red1" opacity="0.85" d="M227.944 148.967C236.581 153.403 236.648 165.725 228.061 170.255L129.084 222.47C121.118 226.672 111.534 220.928 111.485 211.922L110.918 108.58C110.869 99.574 120.389 93.7252 128.401 97.84L227.944 148.967Z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgButton;