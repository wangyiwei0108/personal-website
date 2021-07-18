import React from 'react';
import Work from './Work';
import Education from './Education';

const Experience = () => {
  return (
    <div className="experience__container" id="experience">
      <div className="experience__work"><Work/></div>
      <div className="experience__education"><Education/></div>
    </div>
  )
}

export default Experience;