import React from 'react'
import car from '../assets/car.jpg'
const About = () => {
  return (
    <div>
      <div name='intro'>
        <img 
        src={car}
        alt='car'
        className='h-screen w-screen'
        />
      </div>
    </div>
  )
}

export default About
