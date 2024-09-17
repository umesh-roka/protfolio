import React, { useContext } from 'react'
import Myimage from './images/IMG_8134-removebg-preview.png'
import Skills from './Skills'
import Services from './Services'
import Projects from './Projects'
import { RefContext } from './RefContext'
import Footer from '../ui/Foooter'
import resume from '../feature/files/Resume.docx'
import { NavLink } from 'react-router-dom'
const Components = () => {
  
  const sectionRefs = useContext(RefContext);

  return (
    <div>
       <div className=' bg-blue-gray-800   z-0 text-white'>

<div className="max-h-[100%] pb-12 px-5 bg-blue-gray-900  grid grid-flow-col justify-center gap-10">      

<div className='flex  flex-col  justify-center'>

 <h1 className='lg:text-3xl md:text-lg'>Hi ! I'M Umesh Roka Magar</h1>
 <h1 className='lg:text-3xl '>Full Stack Developer</h1>
 <div className=' transition duration-150 ease-out hover:ease-in mt-3'>
 {/* <button className='uppercase transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-blue-500 duration-300 ... hover:bg-orange-300 max-w-fit px-3  rounded'>Contact</button> */}
 <NavLink to={resume} download={'Resume.docx'}> Download Resume</NavLink>

 </div>
</div>
<div className='img-sec '>
<img className=' h-[300px] lg:h-[400px] w-[200px] lg:w-[300px]' src={Myimage} alt="" />

</div>  

</div>



<div id='about' className="about-sec pb-[30px]">

<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
<h1 className='p-3 lg:mx-[200px] uppercase text-2xl lg:2xl'>About me</h1>
<div className=' px-2 text-sm lg:mx-[200px] lg:text-xl'>I am a dedicated MERN stack developer proficient in MongoDB, Express.js, React, and Node.js, with a passion for crafting robust and scalable web applications. With hands-on experience in both front-end and back-end development, I specialize in creating interactive user interfaces using React, designing and implementing RESTful APIs with Express.js, and managing data efficiently in MongoDB. My background includes deploying applications on cloud platforms and utilizing modern development practices to deliver high-quality software solutions. I thrive in collaborative environments, leveraging agile methodologies to achieve project goals effectively. I am committed to continuous learning, staying updated with emerging technologies to innovate and drive impactful results in web development.
</div>
</div>


<hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>


<div  ref={sectionRefs.skills} className="pt-6 skill-sec">
<Skills/>
</div>

<div  ref={sectionRefs.services} className="pt-6 Services-sec">
<Services/>
</div>
<div className="projects pt-6 ">
<Projects/>
</div>

<div className=" bg-blue-gray-900 pt-[10px] mt-[100px] ">
<Footer/>
</div>
</div>
    </div>
  )
}

export default Components
