import React from 'react'
import HeadingInfo from '../Shared/HeadingInfo';
import reactIcon from "../../assets/icons/react-icon.webp"
import jsIcon from "../../assets/icons/js-icon.jpg"
import htmlIcon from "../../assets/icons/html-icon.png"
import cssIcon from "../../assets/icons/css-icon.png"
import nodejsIcon from "../../assets/icons/node-js-icon-11.jpg"
import mongodbIcon from "../../assets/icons/mongodb-icon.webp"
import firebaseIcon from "../../assets/icons/firebase-icon.png"
import { motion } from "framer-motion";

const CoreSkills = () => {


  return (
    <div className='my-12 p-6'>
        {/* heading-container */}
      <div>
        <HeadingInfo 
        title={"Core Skills Are Here"}
        subtitle={"Building a Strong Foundation with Technical Expertise, Problem-Solving, and Critical Thinking to Drive Innovation and Excellence"}
        />
      </div>
      {/* skill-grid-container */}
      <div className='p-6 mt-6 grid md:grid-cols-3 gap-5 border-2 rounded-lg '>
        {/* react-container */}
        <div 
        style={{
          position: "relative",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex:1
        }}
        className='flex items-center justify-center col-span-1 md:col-span-3 min-h-[200px] border-2'>
            <img 
            className='w-20 h-20 md:w-32 md:h-32 rounded-xl'
            src={reactIcon} alt="reactIcon" />
            <span className='text-3xl font-bold tracking-wide ml-5 '>React</span>
        {/* motion-animation-div */}
          <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
          transform: "skewX(-30deg)",
          zIndex :1
        }}
        animate={{ left: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        </div>
        {/* js-container */}
        <div 
        style={{
          position: "relative",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex:1
        }}

        className='flex items-center justify-center row-span-1 md:row-span-3 min-h-[200px] border-2'>
            <img 
            className='w-20 h-20 md:w-32 md:h-32 rounded-xl'
            src={jsIcon} alt="jsIcon" />
            <span className='text-3xl font-bold tracking-wide ml-5 '>Java Script</span>
        {/* motion-animation-div */}
          <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
          transform: "skewX(-30deg)",
          zIndex :1
        }}
        animate={{ left: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        </div>
        {/* html-container */}
        <div 
        style={{
          position: "relative",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex:1
        }}
        className='flex items-center justify-center col-span-1 md:col-span-2 min-h-[200px] border-2'>
            <img 
            className='w-20 h-20 md:w-32 md:h-32 rounded-xl'
            src={htmlIcon} alt="htmlIcon" />
            <span className='text-3xl font-bold tracking-wide ml-5 '>HTML</span>
        {/* motion-animation-div */}
          <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
          transform: "skewX(-30deg)",
          zIndex :1
        }}
        animate={{ left: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        </div>
        {/* css-container */}
        <div 
        style={{
          position: "relative",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex:1
        }}
        className='flex items-center justify-center col-span-1 md:col-span-2 min-h-[200px] border-2'>
            <img 
            className='w-20 h-20 md:w-32 md:h-32 rounded-xl'
            src={cssIcon} alt="cssIcon" />
            <span className='text-3xl font-bold tracking-wide ml-5 '>Css</span>
        {/* motion-animation-div */}
          <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
          transform: "skewX(-30deg)",
          zIndex :1
        }}
        animate={{ left: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        </div>
        {/* nodejs-container */}
        <div 
        style={{
          position: "relative",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex:1
        }}
        className='flex items-center justify-center min-h-[200px] border-2'>
            <img 
            className='w-20 h-20 md:w-32 md:h-32 rounded-xl'
            src={nodejsIcon} alt="nodejsIcon" />
            <span className='text-3xl font-bold tracking-wide ml-5 '>Node JS</span>
        {/* motion-animation-div */}
          <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
          transform: "skewX(-30deg)",
          zIndex :1
        }}
        animate={{ left: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        </div>
        {/* firebase-container */}
        <div 
        style={{
          position: "relative",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex:1
        }}
        className='flex items-center justify-center min-h-[200px] border-2'>
            <img 
            className='w-20 h-20 md:w-32 md:h-32 rounded-xl'
            src={firebaseIcon} alt="firebaseIcon" />
            <span className='text-3xl font-bold tracking-wide ml-5 '>Firebase</span>
        {/* motion-animation-div */}
          <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
          transform: "skewX(-30deg)",
          zIndex :1
        }}
        animate={{ left: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        </div>
        {/* mongodb-container */}
        <div 
        style={{
          position: "relative",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex:1
        }}
        className='flex items-center justify-center col-span-1 md:col-span-3 min-h-[200px] border-2'>
            <img 
            className='w-20 h-20 md:w-32 md:h-32 rounded-xl'
            src={mongodbIcon} alt="mongodbIcon" />
            <span className='text-3xl font-bold tracking-wide ml-5 '>Mongodb</span>
        {/* motion-animation-div */}
          <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
          transform: "skewX(-30deg)",
          zIndex :1
        }}
        animate={{ left: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        </div>
      </div>
    </div>
  )
}

export default CoreSkills
