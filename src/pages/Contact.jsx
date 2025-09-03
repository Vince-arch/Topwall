import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4" >
      <form className="card w-full max-w-md shadow-lg bg-gray-200 p-8 space-y-4">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

        <input type="text" placeholder="Your Name" className="input input-bordered focus:outline-none w-full" required />
        <input type="email" placeholder="Your Email" className="input input-bordered focus:outline-none w-full" required />
        <textarea placeholder="Your Message" className="textarea textarea-bordered focus:outline-none w-full" rows="5" required></textarea>

        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    </div >
  )
}

export default Contact
