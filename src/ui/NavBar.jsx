import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 ">
    <div className="container flex flex-wrap justify-between mx-auto">
        <div className='flex items-center"'>
            <img src="" className="h-6 mr-3 sm:h-9" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Logo/Company Name</span>
        </div>
        <div className="w-full md:block md:w-auto" id="navbar">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <Link to='/'><li  className="block py-2 pl-3 pr-4">Home</li> </Link>
            <Link to='/about'><li  className="block py-2 pl-3 pr-4">About Page</li></Link>
            <Link to='/services'><li  className="block py-2 pl-3 pr-4">Services Page</li></Link>
            <Link to='/contact'><li  className="block py-2 pl-3 pr-4">Contact Page</li></Link>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default NavBar