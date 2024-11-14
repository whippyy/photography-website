import React from 'react'
import './Home.css';

const home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        {/* Rectangle for 3:4 aspect ratio */}
        <div className="rectangle"></div>
      </div>
      <div className="text-container">
        <h1>Henry</h1>
        <h2>Photographer</h2>
        <h3>Creative Director</h3>
      </div>
    </div>
  )
}

export default home