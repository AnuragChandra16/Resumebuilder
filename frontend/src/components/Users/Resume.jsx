import React from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'
import Body from './Body';

const Resume = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  return (
    <>
    <div className='container'>

    
    <Link to="/resume">Start Your Resume</Link>
    <p className='container-small'>Select your favourite template and start generating it</p>
    </div>
    <Body></Body>
    </>
  )
}

export default Resume

