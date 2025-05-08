import React from 'react'
import intro from '../assets/intro.jpg'
import side from '../assets/side.jpg'


export const Home = () => {
  return (    
      <>
      <div name='intro' className='relative group'>
        <img 
          src={intro} 
          alt='intro image' 
          className='w-screen h-screen flex items-center justify-center text-white transition-all duration-300' 
        />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center px-4 opacity-0 group-hover:opacity-150 transform group-hover:translate-y-0 translate-y-10 transition-all duration-500 ease-out">
            <h1 className="text-3xl md:text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">
              Topwall Insurance Agency
            </h1>
            <p className="mt-4 text-lg md:text-xl animate__animated animate__fadeIn animate__delay-30s">
              Protecting what matters most — tailored insurance solutions you can trust.
            </p>
          </div>
        </div> 
      </div>
      <div name='about' className='m-5 flex gap-6 items-center justify-center'>
      <img 
          src={side} 
          alt='intro image' 
          className='w-full h-full flex rounded-2xl' 
        />

        <p className='flex '>
        Established in 2002, Topwall Insurance Agency Ltd is a reputable
        insurance agency based in Nakuru, Kenya. They specialize in tailoring
        insurance policies to meet individual needs, ensuring cost-effective
        coverage and efficient claim settlements. Their comprehensive services
        span various sectors, including land, air, and marine insurance.
      </p>
      </div>
      <div name='services'>

      </div>
      <div name='testimonials'>

      </div>
      </> 
  )
}
