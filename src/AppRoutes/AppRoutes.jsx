import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from '../MainLayout/MainLayout'
import ProjectDetails from '../Pages/ProjectDetails/ProjectDetails'
import Home from '../Pages/Home/Home'
import ContactMe from "../Pages/ContactMe/ContactMe"
import AllProject from '../Pages/AllProject/AllProject'
import AboutMe from '../Pages/AboutMe/AboutMe'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='contact-me' element={<ContactMe/>}/>
        <Route path="all-projects" element={<AllProject/>}/>
        <Route path="about-me" element={<AboutMe/>}/>

        {/* dynamic-route */}
        <Route path='project/:id' element={<ProjectDetails/>}/>
        </Route>        
    </Routes>
  )
}

export default AppRoutes
