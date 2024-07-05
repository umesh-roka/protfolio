import React from 'react'

const Services = () => {
  return (
    <div>
 <h1 className='text-center text-2xl lg:text-4xl mr-[30px] lg:mr-[70px] underline italic mb-[20px] uppercase '>Services</h1>

<div className='uppercase space-y-2 lg:space-y-3 px-2 mx-[10px] lg:mx-[50px] pb-[40px] lg:pb-[60px] lg:grid lg:grid-cols-3'>
   <h1 className='text-[15px] lg:text-2xl px-[5px] rounded bg-green-400 w-[300px]  lg:w-[500px] lg:mt-[11px]'> responsive Web development</h1>

   <h1 className='text-[15px] lg:text-2xl px-[5px] rounded bg-green-400 w-[300px] lg:ml-[80px] lg:w-[400px]'>full stack development</h1>
   <h1 className='text-[15px] lg:text-2xl lg:ml-[40px] rounded bg-green-400 w-[300px] lg:w-[400px]'>backend  development</h1>

   <h1 className='text-[15px] lg:text-2xl px-[5px] rounded bg-green-400 w-[300px]  lg:w-[500px]'>database design</h1>

   <h1 className='text-[15px] lg:text-2xl px-[5px] rounded bg-green-400 w-[300px] lg:ml-[80px] lg:w-[400px]'>Web hosting</h1>

   </div>

    </div>
  )
}

export default Services
