import { useState } from 'react'
import './Homepage.css'
import ResumeForm from './ResumeForm.jsx'
import Resume from './Resume.jsx'

function Homepage() {
  const [fullName, setFullName] = useState("Your Name");
  const [emailAddress, setEmailAddress] = useState("name@gmail.com");
  const [portfolioURL, setPortfolioURL] = useState("portfolio.com");
  const [githubURL, setGithubURL] = useState("github.com/name");


  return (
    <div className="container">
        <div className="left">
        <ResumeForm
        fullName={fullName}
        setFullName={setFullName}
        emailAddress={emailAddress}
        setEmailAddress={setEmailAddress}
        portfolioURL={portfolioURL}
        setPortfolioURL={setPortfolioURL}
        githubURL={githubURL}
        setGithubURL={setGithubURL}
      />
        </div>
        <div className="right">
        <Resume 
        fullName={fullName}
        emailAddress={emailAddress}
        portfolioURL={portfolioURL}
        githubURL={githubURL}
        />
        </div>
    </div>
  )
}

export default Homepage
