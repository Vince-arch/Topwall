import React from 'react'

export const Navbar = () => {
  return (
    <>
 <div className="navbar h-20 shadow bg-gray-300 flex justify-between px-6 sticky top-0 z-50">
  <div className="text-xl font-bold">Topwall</div>
  <div className="flex gap-6">
    <a href="#" className="text-lg text-gray-500 hover:text-gray-900">About</a>
    <a href="#" className="text-lg text-gray-500 hover:text-gray-900">Products</a>
    <a href="#" className="text-lg text-gray-500 hover:text-gray-900">Contact</a>
  </div>
</div>
</>
 )
}
