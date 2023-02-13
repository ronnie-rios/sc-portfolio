import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="" className="flex items-center">
            <img src="" className="h-6 mr-3 sm:h-9" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Logo/Company Name</span>
        </a>
    
        <div className=" w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li  className="block py-2 pl-3 pr-4">
                Home
            </li>
            <li  className="block py-2 pl-3 pr-4">
                About Page
            </li>
            <li  className="block py-2 pl-3 pr-4">
                Services Page
            </li>
            <li  className="block py-2 pl-3 pr-4">
                Contact Page
            </li>
           
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default NavBar