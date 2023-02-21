import React from 'react'

const AboutPage = () => {
  return (
    <main className='grid md:grid-cols-3 h-screen gap-4 p-10'>
      <div className='col-span-2'>
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia adipisci suscipit eveniet doloremque reprehenderit qui aliquam voluptate similique, quasi officia praesentium aspernatur iusto facere debitis sit nisi a ut. Ipsam ea voluptate illo consectetur doloribus asperiores, pariatur, minima tenetur inventore, praesentium voluptatum amet consequuntur molestiae! Explicabo porro reiciendis id, aspernatur repudiandae quas non minus, necessitatibus quisquam consectetur aut tempore eius?</p>
      </div>
      <div className='col-start-3 z-[0]  h-[35%]  bg-gradient-to-r from-gray-500 '/>
    </main>
  )
}

export default AboutPage