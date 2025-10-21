import React from 'react';
import { Element } from 'react-scroll';
import './projectcontainer.css';
import proj1 from '../../../src/images/proj1.png'
import proj2 from '../../../src/images/proj2.png'
import proj3 from '../../../src/images/proj3.png'


const Projects = () => {
  return (
    <Element className="projectsContainer" id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <div className="projectsGrid">
        <div className="projectCard animated fadeInUp">
          <img src={proj1} alt="Music Shop" />
          <div className="projectDescription">
            <p>Developed a React-based movie blog site with local storage for creating and managing blog posts.</p>
          </div>
        </div>

        <div className="projectCard animated fadeInUp">
          <img src={proj2} alt="Portfolio Website" />
          <div className="projectDescription">
            <p>A portfolio website created with React and Material-UI.</p>
          </div>
        </div>

        <div className="projectCard animated fadeInUp">
          <img src={proj3} alt="Library Management System" />
          <div className="projectDescription">
            <p>A blue themed aesthetic music shop website built using HTML,CSS and JavaScript.</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
