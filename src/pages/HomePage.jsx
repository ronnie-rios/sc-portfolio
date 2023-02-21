import React from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Testomonial from '../components/Testomonial'
import '../App.css'
const HomePage = () => {
  return (
    <main >
        
        <Landing />
        <div className='spacer layer'>
          
        </div>
        <About />
        <Services />
        <Testomonial />
    </main>
  )
}

export default HomePage