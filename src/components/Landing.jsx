import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-white'>
        <div className='grid max-w-screen-xl px-4 py-8 lg:grid-cols-12'>
            <div className='mr-auto place-self-center lg:col-span-7'>
                <h1 className='max-w-2xl mb-4 text-4xl font-extrabold '>Call to action</h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam consectetur dignissimos earum adipisci maiores incidunt ipsam a dolor obcaecati!</p>
                <button onClick={()=> navigate('/contact')} className='bg-gray-700 rounded-md p-4 text-white hover:bg-gray-500'>Get Started</button>
            </div>
            <div className='hidden lg:col-span-5'>

            </div>
        </div>

    </section>
  )
}

export default Landing