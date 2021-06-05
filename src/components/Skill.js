import React from 'react';

const Skill = () => {
  return(
    <div className="skill__container">
      <div className="skill__header"><h4>SKILL</h4></div>
      <div className="skill__collection">
        <div className="circle circle-1">
          <h4>HTML / CSS</h4>
          <ul>
            <li>Semantic HTML</li>
            <li>CSS3</li>
            <li>Flexbox &#38; Grid</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className="circle circle-2">
          <h4>JavaScript</h4>
          <ul>
            <li>ECMAScript 6 +</li>
            <li>React</li>
            <li>React Hooks</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="circle circle-3">
          <h4>Language</h4>
          <ul>
            <li>English - Toeic 870</li>
            <li>Spanish - Bulats B1</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill;