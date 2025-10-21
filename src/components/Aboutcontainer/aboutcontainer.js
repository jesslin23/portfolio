import React from 'react';
import { Element } from 'react-scroll';
import './aboutcontainer.css';
import about from '../../../src/images/about.jpg'
const About = () => {
  return (
    <Element className='aboutContainer' id='about'>
      <div className='aboutContainer_text'>
        <h2>About Me</h2>
        <p>
  I am M. Jesslin Persis, currently pursuing a Bachelor of Engineering in Computer Science and Engineering, in my third year at Francis Xavier Engineering College.
</p>
<p>
  I have earned certifications in programming languages such as C, C++, Python, and Full Stack Java, which have helped me build a strong foundation in both back-end and front-end development.
</p>
<p>
  I am particularly passionate about front-end design and development. My short-term goal is to secure a position at a reputable company, where I can apply my skills and contribute meaningfully. In the long term, I aim to deepen my expertise in front-end technologies and continue expanding my knowledge in the field.
</p>
      </div>
      <div className='aboutContainer_image'>
        <img src={about} alt='About Me' />
      </div>
    </Element>
  );
};

export default About;
