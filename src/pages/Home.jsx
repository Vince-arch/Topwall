import React from 'react'
//import intro from '../assets/intro.jpg'
//import side from '../assets/side.jpg'
import insurance from "../assets/insurance.jpg"
import twimage from "../assets/twimage.png"
import Caurosel from "../components/Caurosel"

export const Home = () => {
  return (
    <>
      <div name='intro' className='relative group '>
        <img
          src={insurance}
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
      <div name='about' className='mt-15 ml-8 mb-15 flex gap-6 items-center justify-center'>
        <img
          src={twimage}
          alt='intro image'
          className='w-full h-full flex rounded-xl'
        />

        <p className='flex text-xl'>
          Established in 2002, Topwall Insurance Agency Ltd is a reputable
          insurance agency based in Nakuru, Kenya. We specialize in tailoring
          insurance policies to meet individual needs, ensuring cost-effective
          coverage and efficient claim settlements. Our comprehensive services
          span various sectors, including land, air, and marine insurance.
        </p>
      </div>
      <div name='couresel (partners)'>
        <Caurosel />
      </div>
      <div name='testimonials'>

      </div>
    </>
  )
}
