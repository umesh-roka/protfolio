import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

 
const  Header=()=> {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white uppercase lg:text-3xl">
      <Typography
        as="li"
       
       
        className="p-1 font-normal"
      >
      <NavLink className=''>Home</NavLink>
      </Typography>
      <Typography
        as="li"
        
     
        className="p-1 font-normal"
      >
             <NavLink to ='/services'>Services</NavLink>

      </Typography>
      <Typography
        as="li"
      
     
        className="p-1 font-normal"
      >
            <NavLink to=''>About</NavLink>

      </Typography>
      <Typography
        as="li"
       
      
        className="p-1 font-normal"
      >
             <NavLink>Contact</NavLink>

      </Typography>
    </ul>
  );
 
  return (
    <div className="sticky top-0 z-50  max-w-[100%]">

      <Navbar className=" h-max max-w-full bg-blue-gray-900 text-white rounded-none  py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-start text-blue-gray-900">
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
           
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden float-right"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default Header