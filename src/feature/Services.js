import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
const Services = () => {
  return (
    <div className='my-[30px] '> 
    <h1 className='uppercase font-bold text-3xl text-center mb-[50px]'>Services</h1>
     <div className=' grid lg:grid-cols-4 sm:grid-cols-1 gap-[20px] mx-[80px]'>
 
    
        <Card className="mt-6 w-[300px]">
          <CardBody>
            <Typography  color="blue-gray" className="mb-2 text-lg underline font-bold uppercase">
            Responsive Website
            </Typography>
            <Typography>     
        A responsive website adapts its layout and content to fit different screen sizes and devices, providing an optimal user experience. It uses flexible grids, images, and media queries to ensure accessibility across desktops, tablets, and smartphones.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
          
        </Card>
        <Card className="mt-6 w-[300px]">
          <CardBody>
            <Typography  color="blue-gray" className="mb-2 text-lg underline font-bold uppercase">
             Database design
            </Typography>
            <Typography>   
        Database design is the process of structuring data in a database to ensure efficient storage, retrieval, and management. It involves creating tables, defining relationships, and ensuring data integrity through normalization and constraints.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
          
        </Card>
        <Card className="mt-6 w-[300px]">
          <CardBody>
            <Typography  color="blue-gray" className="mb-2 text-lg underline font-bold uppercase">
              fullstack development
            </Typography>
            <Typography>    
      Fullstack development involves building both the front-end (user interface) and back-end (server, database) of web applications. A fullstack developer works with multiple technologies like HTML, CSS, JavaScript, databases, and server-side programming to create complete applications.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
          
        </Card>
        <Card className="mt-6 w-[300px]">
          <CardBody>
            <Typography  color="blue-gray" className="mb-2 text-lg underline font-bold uppercase">
              Web Hosting
            </Typography>
            <Typography>
          Web hosting is a service that allows individuals or organizations to store their website files on servers, making them accessible on the internet. Hosting providers offer various plans, including shared, VPS, and dedicated hosting, to suit different needs and budgets.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
          
        </Card>
        </div>
        </div>

   
  )
}

export default Services
