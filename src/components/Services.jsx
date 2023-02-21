
const Services = () => {
  return (
    <section className='grid md:grid-cols-5 justify-items-center gap-4 p-4'>
        <div className='md:col-span-5'>
            <h1 className='m-4 text-3xl'>Services Provided</h1>
        </div>
        <div className='md:col-span-5'>
            <p className='m-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam cum itaque perferendis! Quam, magni id?</p>
        </div>
        <div className='md:col-start-2 md:col-end-2'>
            <h1 className='pb-4'> Service 1</h1>
            <p>Lorem ipsum dolor sat amet consectetur adipisicing elit. Laudantium, cumque?</p>
        </div>
        <div className='md:col-start-3 md:col-end-3'>
            <h1 className='pb-4'> Service 2</h1>
            <p>Lorem ipsum dolor sat amet consectetur adipisicing elit. Laudantium, cumque?</p>
        </div>
        <div className='md:col-start-4 md:col-end-4'>
            <h1 className='pb-4'> Service 3</h1>
            <p>Lorem ipsum dolor sat amet consectetur adipisicing elit. Laudantium, cumque?</p>
        </div>
    </section>
  )
}

export default Services