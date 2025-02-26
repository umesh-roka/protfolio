import React, { useContext, useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { RefContext } from "../feature/RefContext";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const sectionRefs = useContext(RefContext);

  const handleNavClick = () => {
    setOpenNav(false);
  };
  const handlenavClick = () => {
    setOpenNav(false);
  };

  const scrollToSection = (section) => {
    const sectionRef = sectionRefs[section];
    if (sectionRef && sectionRef.current) {
      console.log(`Scrolling to section: ${section}`); // Debug log
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Section reference not found: ${section}`); // Debug log
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavLinkClick = (section) => {
    return (e) => {
      e.preventDefault();
      scrollToSection(section);
      setTimeout(handleNavClick, 1000); // Delay closing the nav to allow scrolling
    };
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white font-bold">
      <Typography as="li" className="p-1 lg:hover:px-2 lg:hover:rounded-md font-bold text-xl hover:text-white hover:bg-orange-400">
        <NavLink to="#" onClick={handleNavClick}>Home</NavLink>
      </Typography>
      <Typography as="li" className="p-1 font-bold text-xl lg:hover:px-2 lg:hover:rounded-md hover:text-white hover:bg-orange-400">
        <NavLink to="#" onClick={handleNavLinkClick('services')}>Services</NavLink>
      </Typography>
      <Typography as="li" className="p-1 font-bold text-xl lg:hover:px-2 lg:hover:rounded-md hover:text-white hover:bg-orange-400">
        <NavLink to="#" onClick={handleNavLinkClick('skills')}>Skills</NavLink>
      </Typography>
      <Typography as="li" className="p-1 font-bold text-xl lg:hover:px-2 lg:hover:rounded-md hover:text-white hover:bg-orange-400">
        <NavLink to="#" onClick={handleNavLinkClick('about')}>About</NavLink>
      </Typography>
      <Typography as="li" className="p-1 font-bold text-xl lg:hover:px-2 lg:hover:rounded-md hover:text-white hover:bg-orange-400">
        <NavLink to="#" onClick={handleNavLinkClick('contact')}>Contact</NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 z-50 max-w-[100%]">
      <Navbar className="h-max max-w-full bg-blue-gray-900 text-white rounded-none py-2 lg:px-8 lg:py-4">
        <div className="flex justify-between text-blue-gray-900">
          <div className="flex font-bold text-xl uppercase text-white items-center justify-start">
            <img
              className="w-[50px] h-[40px] px-2"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmq40nL3yAS0N42VdrTahDKT3-KYPHT3S4w&s'
              alt=""
            />
            <h1>Portfolio</h1>
          </div>
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
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
