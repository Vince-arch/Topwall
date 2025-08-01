import React from 'react'
import car from '../assets/car.jpg'
import mission from '../assets/mission.png'
import vision from '../assets/vision.png'

const About = () => {
  return (
    <div className=''>
      <div name='intro' className='h-auto w-auto'>
        <img
          src={car}
          alt='car'
          className='h-96 w-full object-cover'
        />
      </div>

      <div name='body' className='m-5'>
        <h1 className=' text-center p-10 text-blue-400 font-extrabold text-5xl'>About Us</h1>

        <p className='font-bold'>Protecting What Matters Most.</p>

        At Topwall Insurance, we believe peace of mind should never be a luxury. That's why we provide reliable, transparent, and personalized insurance solutions tailored to fit the needs of individuals, families, and businesses.
        Founded with a vision to make insurance simpler and more accessible, Topwall Insurance has grown into a trusted name in the industry. Whether you're insuring your home, car, health, or business, we're here to offer protection that makes sense and support you can count on when it matters most.


        <p className='pt-10 mb-5 underline font-extrabold text-2xl'>What We Offer:</p>
        <p className='mt-5 mb-5'>
          <span className="font-bold mb-3 text-xl text-blue-500 ">Comprehensive Coverage:</span> From personal to commercial insurance, we offer a wide range of policies to meet your unique needs.
        </p>
        <p className='mt-5 mb-5'>
          <span className='font-bold mb-3 text-xl text-blue-500'>Customer-Centered Service:</span> Our team takes the time to understand your situation and guide you every step of the way.
        </p>
        <p className='mt-5 mb-5'>
          <span className='font-bold mb-3 text-xl text-blue-500'>Quick Claims Support:</span> In times of need, we respond swiftly and professionally to help you recover and move forward.
        </p>

        <div className='pt-10'>
          <div className='flex flex-row items-center pb-3'>
            <img
              src={mission}
              alt='mission'
              className='h-25 w-25 '
            />
            <p className='ml-4'>
              <span className='font-semibold text-3xl text-blue-600'>Our Mission:</span><br />
              To deliver dependable insurance services with integrity, care, and innovation—empowering our clients to live and work with confidence.
            </p>
          </div>
          <div className='flex flex-row items-center pt-5'>
            <img
              src={vision}
              alt='vision'
              className='h-25 w-25'
            />
            <p className='ml-4'>
              <span className='font-semibold text-3xl text-blue-600'>Our Vision:</span><br />
              To be the most trusted and customer-focused insurance provider in the region.
            </p>
          </div>


        </div>
        <div className='m-5 pt-5 text-xl'>
          <span className='text-blue-700 font-bold text-3xl m-5 '>Why Choose Us? </span><br />
          Transparent pricing <br />
          Easy-to-understand policies <br />
          Fast and fair claims process <br />
          Friendly, knowledgeable support <br />
        </div>

      </div>
    </div>
  )
}

export default About
