import React from 'react';
import portrait from '../assets/portrait.jpg';

const Intro = () => {
  return(
    <div className="intro__container">
      <div className="intro__text">
        <h1>
          你好！我是王奕崴<br/>往下滑，認識我多一點。
          <div className="intro__line"></div>
        </h1>
      </div>
      <img alt="portrait" src={portrait}/>
    </div>
  )
}

export default Intro;