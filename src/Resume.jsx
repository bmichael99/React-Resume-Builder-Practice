import { useState } from 'react'
import ResumeForm from './ResumeForm.jsx'
import './Resume.css'

function Resume({fullName,emailAddress,portfolioURL,githubURL}) {

  return (
    <div className="preview">
      <div className="header">
        <h2>{fullName}</h2>
        <p>Email: {emailAddress}</p>
        <p>Portfolio: {portfolioURL}</p>
        <p>GitHub: {githubURL}</p>
      </div>

      <div className="education-section">

      </div>
      
      <div className="skills-section">

      </div>

      <div className="experience-section">

      </div>

      <div className="project-section">

      </div>

      
    </div>
  );
}

export default Resume
