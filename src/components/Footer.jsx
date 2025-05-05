import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ira from '../assets/ira.png';

export const Footer = () => {

  const currentYear=new Date().getFullYear();

  return (
    <>
    <div className='footer h-50 shadow bg-gray-600 flex  justify-between p-4  mt-2'>

    <div name='left' className='text-white flex flex-col text-4xl font-extrabold'>Topwall Agency
    <p className='text-lg'>Copyright &copy; {currentYear}  All Rights Reserved.</p>
    </div>
    
    <div name='center' className='text-white font-bold text-lg'>
      <p>Regulated by the IRA</p>
      <img className='w-44 h-32'
      src={ira}
      alt='ira logo'
      />
    </div>
    <div name='right' className='text-white flex flex-col font-bold '>
      <p className='flex pl-10 underline font-bold text-lg'>Contact Us</p>
      <p><LocationOnIcon/>  Nakuru, George Morara Avenue</p>
      <p><PhoneIcon/> 07xxxxxxx</p>
      <p> <EmailIcon/>  topwallagency@gmail.com</p>
    </div>
       
    </div>


    </>
  )
}