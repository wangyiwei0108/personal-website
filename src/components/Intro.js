import React from 'react';

const Intro = () => {
  return(
    <div className="intro__container">
      <div className="intro__text">
        <h1>
          你好！我是王奕崴<br/>往下滑，認識我多一點。
          <div className="intro__line"></div>
        </h1>
      </div>
      <img alt="cool" src="images/portrait.jpg"/>
    </div>
  )
}

export default Intro;