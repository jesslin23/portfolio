import React from 'react';
import { Link } from 'react-scroll';
import './topcontent.css';
import cvImage from '../../images/Jesslin Resume (6).jpg';

const TopContent = () => {
  return (
    <div className='topcontent'>
      <div className='topcontent_container'>
        <h1>M.Jesslin Persis</h1>
        <h4>
          Francis Xavier Engineering College
          <p>Computer Science Student | Aspiring Software Developer</p>
        </h4>

        <a href={cvImage} target="_blank" rel="noopener noreferrer">
  <button className='topcontent_b1'>View CV</button>
</a>
        <Link to='projects' smooth={true} duration={500}>
          <button className='topcontent_b2'>My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
