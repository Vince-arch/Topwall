import React from 'react'
import car from '../assets/car.jpg'
const About = () => {
  return (
    <div>
      <div name='intro' className='h-auto w-auto'>
        <img 
        src={car}
        alt='car'
        className='h-96 w-full '
        />
      </div>
      <div name='body' className=''>
      <h1 className=' text-center p-10 text-blue-400 font-extrabold text-3xl'>About Us</h1>

<p className=''>Protecting What Matters Most.</p>

At Topwall Insurance, we believe peace of mind should never be a luxury. That's why we provide reliable, transparent, and personalized insurance solutions tailored to fit the needs of individuals, families, and businesses.
Founded with a vision to make insurance simpler and more accessible, Topwall Insurance has grown into a trusted name in the industry. Whether you’re insuring your home, car, health, or business, we're here to offer protection that makes sense—and support you can count on when it matters most.


<p className='pt-10'>What We Offer:</p>
    Comprehensive Coverage: From personal to commercial insurance, we offer a wide range of policies to meet your unique needs.
    Customer-Centered Service: Our team takes the time to understand your situation and guide you every step of the way.
    Quick Claims Support: In times of need, we respond swiftly and professionally to help you recover and move forward.
Our Mission
To deliver dependable insurance services with integrity, care, and innovation—empowering our clients to live and work with confidence.
Our Vision
To be the most trusted and customer-focused insurance provider in the region.
Why Choose Us?
    Transparent pricing
    Easy-to-understand policies
    Fast and fair claims process
    Friendly, knowledgeable support
      </div>
    </div>
  )
}

export default About
