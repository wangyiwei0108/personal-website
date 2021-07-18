import React from 'react';

const Skill = () => {
  return(
    <div className="skill__container">
      <div className="skill__header">
        <div className="marquee">
          <div>
            <span>&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill</span>
          </div>
        </div>
      </div>
      <div className="skill__collections">
        <div className="skill__collection">
          <h5 className="skill__text-1">Front-End</h5>
          <ul className="skill__text-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Flexbox &#38; Grid</li>
            <li>SASS</li>
            <li>JavaScript ES6+</li>
            <li>React</li>
            <li>React Hooks</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="skill__collection">
          <h5 className="skill__text-1">Language</h5>
          <ul className="skill__text-2">
            <li>英文 Toeic 870</li>
            <li>西班牙文 Bulats B1</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill;