import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="text-2xl mb-4 font-light">A React App to search Github profiles and see profile details.</p>
      <p className="text-lg gray-400">
        Version: <span className='text-white'>1.0.0</span>
      </p>
      <p className="text-lg gray-400">
        Developer: <a href='https://linkedin.com/in/fampiyush' target='_blank' rel="noopener noreferrer" className='text-white underline'>Piyush Gupta</a>
      </p>
    </div>
  )
}

export default About