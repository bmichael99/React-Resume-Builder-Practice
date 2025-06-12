import { useState } from 'react'
import ResumeForm from './ResumeForm.jsx'

function Resume({fullName,emailAddress,portfolioURL,githubURL}) {

  return (
    <div className="preview">
      <h2>{fullName}</h2>
      <p>Email: {emailAddress}</p>
      <p>Portfolio: {portfolioURL}</p>
      <p>GitHub: {githubURL}</p>
    </div>
  );
}

export default Resume
