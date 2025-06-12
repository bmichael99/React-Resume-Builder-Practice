import { useState } from 'react'
import './ResumeForm.css'


function FormInput({id, label, type = "text", value, onChange}){
  return(
    <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input type={type} value={value} id={id}
    onChange={onChange}/>
    </div>
  );
}

function ResumeForm({fullName,setFullName,
    emailAddress,setEmailAddress,
    portfolioURL, setPortfolioURL,
    githubURL, setGithubURL}) {
  

  return (
    <>
      <div className="form">

      <FormInput id="nameInput" type = "text" value={fullName} label="First Name"
       onChange={(event) => setFullName(event.target.value)}/>

      <FormInput id="emailInput" type = "email" value={emailAddress} label="Email Address"
       onChange={(event) => setEmailAddress(event.target.value)}/>

      <FormInput id="portfolioInput" type = "url" value={portfolioURL} label="Portfolio URL"
       onChange={(event) => setPortfolioURL(event.target.value)}/>

       <FormInput id="githubInput" type = "url" value={githubURL} label="Github URL"
       onChange={(event) => setGithubURL(event.target.value)}/>

      </div>
    </>
  )
}

export default ResumeForm
