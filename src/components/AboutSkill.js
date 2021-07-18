import React from 'react';
import About from './About';
import Skill from './Skill';

const AboutSkill = () => {
  return (
    <div className="aboutskill__container" id="about">
      <section className="aboutskill__about"><About/></section>
      <section className="aboutskill__skill"><Skill/></section>
    </div>
  )
}

export default AboutSkill;
