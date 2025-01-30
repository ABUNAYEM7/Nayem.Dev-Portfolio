import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import Banner from '../Components/Banner/Banner'
import Skills from '../Components/Skills/Skills'
import CoreSkills from '../Components/CoreSkills/CoreSkills'
import Projects from '../Components/MyProject/Projects'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <header>
        <Navbar/>
      </header>
      <main className='min-h-screen'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout
