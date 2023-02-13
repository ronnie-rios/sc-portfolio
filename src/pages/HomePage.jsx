import React from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import Services from '../components/Services'

const HomePage = () => {
  return (
    <main className='max-w-screen-xl mx-auto'>
        <Landing />
        <About />
        <Services />
    </main>
  )
}

export default HomePage