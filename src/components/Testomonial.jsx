import React from 'react'

const Testomonial = () => {
  return (
    <section className='grid grid-cols-3 justify-items-center p-4 my-10'>
        <div className='m-4 col-start-2'>
            <h2 className='text-3xl'>Testimonial(s)?</h2>
        </div>
        <div className='md:col-span-2'>
            <h3>can be one quote, rotating quotes, a board of quotes</h3>
        </div>
        <div className='row-span-2'>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ea sapiente inventore alias molestias, cupiditate esse voluptate quae laboriosam natus aliquam quas. Et quas quae, illum obcaecati dignissimos vero! Optio!</h3>
        </div>
        <div className='md:col-start-1 md:col-span-1'>
            <h3>can be one quote, rotating quotes, a board of quotes</h3>
        </div>
        <div className='md:col-span-1'>
            <h3>can be one quote, rotating quotes, a board of quotes</h3>
        </div>
    </section>
  )
}

export default Testomonial