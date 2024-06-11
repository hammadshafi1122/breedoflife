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
    <div className=' text-white md:flex justify-around p-3'>
        <div className='flex justify-center'>
<CiHeart className='font-bold mt-0.5' size={34} style={{ fontWeight: 'bold', color:"black" }}/>
<span className='font-bold text-white text-2xl  relative right-2'>Give life</span>
        </div>
        
        <div className=''>
            <ul className='mt-5 right-3  text-white text-lg space-x-5 flex md:space-x-10 justify-center  md:mt-0 md:text-md md:right-74'>

                <li onClick={()=> navigate('home')}>Home</li>
                <li onClick={()=> navigate("causes")}>Education</li>
                <li onClick={()=> navigate("about")}>Donate</li>
              
   

                <li>Contact </li>

            </ul>
        </div>
        
    </div>
  )
}

export default Navbar