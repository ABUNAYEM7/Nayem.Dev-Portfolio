import { Link, NavLink } from 'react-router'
import logo from '../../assets/logo.webp'
import { motion } from 'framer-motion'

const Navbar = () => {

    // navLinks
    const links = 
    <>
    <li className='text-base font-medium'><NavLink to={"/"}>Home</NavLink></li>
    <li className='text-base font-medium'><NavLink to={"/contact-me"}>Contact Me</NavLink></li>
    <li className='text-base font-medium'><NavLink to={"/all-projects"}>Projects</NavLink></li>
    <li className='text-base font-medium'><NavLink to={"/about-me"}>AboutMe</NavLink></li>
    </>

    // resume-download function
     const downloadResume = () => {
      const resumeUrl = 'https://docs.google.com/document/d/14O5pQVgMqg_S64m2EFEG8wyKpCOQOeZDB0LJl7RvTvg/export?format=pdf';
      window.location.href = resumeUrl;  // This will trigger the download
    };

  return (
    <div className="navbar max-w-screen-2xl mx-auto bg-highlight/30 px-4 fixed top-0 text-white z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      {/* vertical-navLinks */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-highlight text-white rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
        {links}
      </ul>
    </div>
    {/* logo */}
    <Link className=''>
    <img 
    className='w-14 h-14 rounded-full'
    src={logo} 
    alt="logo" />
    </Link>
  </div>
  {/* horizontal-navLinks */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-5">
      {links}
    </ul>
  </div>
  {/* hireMe-button-container */}
  <div className="navbar-end">
    <motion.a 
    href="mailto:mohammadabunayem106@gmail.com"
    onClick={downloadResume}
    whileHover={{scale : 1.05 }}
    whileTap={{scale : 0.9}}
    transition={{type:"spring", stiffness:200}}
    className="text-base font-bold  px-6 py-3 border-2 border-[#2a323c] rounded-full tracking-widest">{`Hire Me -->`}</motion.a>
  </div>
</div>
  )
}

export default Navbar
