import React from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Testomonial from '../components/Testomonial'

const HomePage = () => {
  return (
    <main className='max-w-screen-xl mx-auto'>
        <Landing />
        <About />
        <Services />
        <Testomonial />
    </main>
  )
}

export default HomePage