import React from 'react'
import portfolio from './images/portfolio.png'
import pawstore from './images/pawstore.png'
import codepen from './images/codepen.png'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  
} from "@material-tailwind/react";
 
const Projects = () => {
  return (
 
    <div className='mx-[50px]'>

      <h1 className='font-bold text-3xl uppercase text-center my-[50px]'>Projects</h1>
    
      <div className='grid  lg:grid-cols-4 sm:grid-cols-1 gap-[10px]'>
        {/* project 1 */}
        <Card className=" w-[300px] mb-[10px]  shadow-lg">
          <CardHeader floated={false} >
            <img
            className='h-[200px] w-[300px]'
              src={pawstore}
              alt="ui/ux review check"
            />
           
          </CardHeader>
          <CardBody>
            
            <Typography color="gray">
              <h1 className=' font-bold text-xl'>Pet Store</h1>
              <NavLink to='https://pawstore-delta.vercel.app/'><Button className='my-[10px]'> Vist Website</Button></NavLink>
              
            </Typography>
           
          </CardBody>
        
        </Card>
        {/* project 2 */}
        <Card className=" w-[300px] mb-[10px] shadow-lg">
          <CardHeader floated={false} >
            <img
            className='h-[200px] w-[300px]'
              src={codepen}
              alt="ui/ux review check"
            />
           
          </CardHeader>
          <CardBody>
            
            <Typography color="gray">
              <h1 className=' font-bold text-xl'>Codepen Clone</h1>
              <NavLink to ='https://clone-codepen-git-second-umesh-rokas-projects.vercel.app/'><Button className='my-[10px]'> Vist Website</Button></NavLink>
              
            </Typography>
           
          </CardBody>
        
        </Card>

                {/* project 3 */}
                <Card className=" w-[300px] mb-[10px] shadow-lg">
          <CardHeader floated={false} >
            <img
            className='h-[200px] w-[300px]'
              src={portfolio}
              alt="ui/ux review check"
            />
           
          </CardHeader>
          <CardBody>
            
            <Typography color="gray">
              <h1 className=' font-bold text-xl'>Protfolio</h1>
              <NavLink to='https://protfolio-eight-dun.vercel.app/'><Button className='my-[10px]'> Vist Website</Button></NavLink>
              
            </Typography>
           
          </CardBody>
        
        </Card>

                {/* project 4 */}
                <Card className=" w-[300px] mb-[10px] shadow-lg">
          <CardHeader floated={false} >
            <img
            className='h-[200px] w-[300px]'
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="ui/ux review check"
            />
           
          </CardHeader>
          <CardBody>
            
            <Typography color="gray">
              <h1 className=' font-bold text-xl'>Project Name</h1>
              <NavLink><Button className='my-[10px]'> Vist Website</Button></NavLink>
              
            </Typography>
           
          </CardBody>
        
        </Card>

        </div>
  
        </div>
      );
    }

export default Projects
