import React from 'react'
import Myimage from './images/IMG_8134-removebg-preview.png'
import Skills from './Skills'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'


const Home = () => {
  return (
    <div className=' bg-blue-gray-800  z-0 text-white'>

    <div className="max-h-[100%] pb-12 px-5 bg-blue-gray-900  grid grid-flow-col justify-center gap-10">      

  <div className='flex  flex-col  justify-center'>

     <h1 className='lg:text-3xl md:text-lg'>Hi ! I'M Umesh Roka Magar</h1>
     <h1 className='lg:text-3xl '>Full Stack Developer</h1>
     <h1 className='uppercase bg-orange-300 max-w-fit px-3 rounded'>Contact</h1>

  </div>
  <div className='img-sec '>
  <img className=' h-[300px] lg:h-[400px] w-[200px] lg:w-[300px]' src={Myimage} alt="" />

  </div>  

 </div>
 


 <div className="about-sec pb-[30px]">

 <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
  <h1 className='p-3 lg:mx-[200px] uppercase text-2xl lg:4xl'>About me</h1>
  <div className=' px-2 text-sm lg:mx-[200px] lg:text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur excepturi sunt alias unde facere sequi maxime sed iusto, repellat consequatur, ipsam tempore. Dolorem ipsa obcaecati voluptatum omnis nesciunt! Dolores ipsa rem ad perferendis quas inventore, vel nisi quaerat corporis pariatur quibusdam deleniti amet fugit harum cum illum nulla hic. Laboriosam.
  </div>
 </div>


 <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>


 <div className="pt-6 skill-sec">
  <Skills/>
 </div>

 <div className="pt-6 Services-sec">
  <Services/>
 </div>
<div className="projects">
  <Projects/>
</div>


<div className="contact">
<Contact/>
</div>
 </div>
  )
}

export default Home
