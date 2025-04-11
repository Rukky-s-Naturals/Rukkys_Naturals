import React from 'react'

const Contact = () => {
  return (
    <form className='w-full'>
      <h1 className='flex justify-center font-bold text-2xl pt-30 pb-10'>Send Us A Message Here</h1>

      <div className='flex p-4 gap-30 space-y-4 ml-50'>
      <div className='justify-between'>
      <label className='font-bold block text-lg' htmlFor="name">Name</label>
      <input className='border-2 h-10 w-60 rounded-md' type='text' id='name' name='name'/>
      </div>

      <div>
      <label className='font-bold block text-lg' htmlFor="email">Email</label>
      <input className='border-2 h-10 w-60 rounded-md' type='text' id='email' name='email address'/>
      </div>

      <div>
      <label className='font-bold block text-lg' htmlFor="phone number">Phone Number</label>
      <input className='border-2 h-10 w-60 rounded-md' type='text' id='phone number' name='phone number'/>
      </div> 
      </div>

      <div className='ml-50 p-4'>
      <label className='font-bold block text-lg' htmlFor="message">Message</label>
      <textarea className='border-2 h-60 w-200 rounded-md' name="message" id="message" placeholder='You can contact us about our products'></textarea>
      </div>

    </form>
  )
}

export default Contact