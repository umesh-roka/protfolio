import React from 'react'

const Contact = () => {
  return (
    <div  className=' pb-[100px] mt-[70px]' >

<h1 className='text-center text-2xl lg:text-4xl mr-[30px] lg:mr-[70px] underline italic mb-[20px] uppercase '>Contact</h1>

<div className='uppercase grid grid-flow-row mx-[10px] lg:mx-[50px] lg:grid lg:grid-cols-4 '>
  <facebook className='h-[50px] w-[100px] flex flex-row items-center'>
<img className='h-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/041/643/208/small/facebook-logo-facebook-icon-transparent-white-background-free-png.png" alt=" facebook" />
<h1>Facebook</h1>
  </facebook>
  <instagram className='h-[50px] w-[100px] flex flex-row items-center'>
<img className='h-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/027/209/183/small/instagram-button-icon-social-media-free-png.png" alt="instagram" />
<h1>instagram</h1>
  </instagram>
  <linkeind className='h-[50px] w-[100px] flex flex-row items-center'>
<img className='h-[40px]' src="https://static.vecteezy.com/system/resources/previews/018/930/584/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt=" linkedin" />
<h1>Linkeind</h1>
  </linkeind>
   <gmail className='h-[50px] pl-[4px] w-[100px] flex flex-row items-center'>
<img className='h-[30px] ' src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png" alt='gmail' />
<h1 className='pl-[4px]'>gmail</h1>
  </gmail>

</div>

    </div>
  )
}

export default Contact
