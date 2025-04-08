import React from 'react'
import { Navbar } from '../components/Navbar'
import intro from '../assets/intro.jpg'
import { Footer } from '../components/Footer'
export const Home = () => {
  return (
    <>
    <Navbar/>
    <div name='intro'>
      <img src={intro} alt='intro image' className='w-screen h-screen relative flex items-center justify-center text-white'/>
    </div>
    <div name='body'></div>
    <Footer/>
    </>
  )
}
