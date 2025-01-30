import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Skills from '../../Components/Skills/Skills'
import CoreSkills from '../../Components/CoreSkills/CoreSkills'
import Projects from '../../Components/MyProject/Projects'

const Home = () => {
  return (
    <div className='min-h-screen'>
        {/* banner-section */}
        <section>
            <Banner/>
        </section>
        {/* soft skills section */}
        <section>
          <Skills/>
        </section>
        {/* core skills section */}
        <section>
          <CoreSkills/>
        </section>
        {/* project showcase section */}
        <section>
          <Projects/>
        </section>
      </div>
  )
}

export default Home
