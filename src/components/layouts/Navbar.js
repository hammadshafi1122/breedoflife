import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Buttons } from '../elements';
import { useNavigate } from 'react-router';




function Navbar() {

    const [isOpen, setisOpen] = useState(false)

    const toggleDropdown =()=>
        {
            setisOpen(!isOpen)


        }
    const navigate = useNavigate();
  return (
    <div className=' text-white flex justify-around p-3'>
        <div className='flex'>
<CiHeart className='font-bold mt-1.5' size={24} style={{ fontWeight: 'bold', color:"black" }}/>
<span className='font-bold text-white text-3xl md:text-2xl  relative right-2'>Give life</span>
        </div>
        <div className=''>
            <ul className='absolute mt-14 right-3  text-white text-xl space-x-5 flex md:space-x-10 md:relative md:mt-0 md:text-md md:right-74'>
                <li onClick={()=> navigate('home')}>Home</li>
                <li onClick={()=> navigate("causes")}>Causes</li>
                <li onClick={()=> navigate("about")}>About</li>
              
                <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex"
      >
        Pages
        <svg
          className="mt-2 ml-0 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>

                <li>Blogs</li>

            </ul>
        </div>
        <div className='flex space-x-2 md:space-x-5'>
            <div className='flex mt-2'>
                <span className=''>EN</span>
                <MdKeyboardArrowDown/>
            </div>
            <div>
                <Buttons 
                type={"primary"}
                title="Contact us"/>
            </div>
            <div className='border-white border-2 p-2'>
                <CiSearch/>


            </div>
        </div>
        
    </div>
  )
}

export default Navbar