import { useState } from 'react'
import ResumeForm from './ResumeForm.jsx'
import './Resume.css'

function Resume({fullName,emailAddress,portfolioURL,githubURL}) {

  return (
    <div className="preview">
      <div className="header">
        <h2>{fullName}</h2>
        <p>{emailAddress} | {portfolioURL} | {githubURL}</p>
      </div>

      <div className="education-section">
      <h4>Education</h4>
      <hr />
      </div>

      <div className="skills-section">
      <h4>Skills</h4>
      <hr />
      </div>

      <div className="experience-section">
      <h4>Experience</h4>
      <hr />
      </div>

      <div className="project-section">
      <h4>Projects</h4>
      <hr />
      </div>

      
    </div>
  );
}

export default Resume
