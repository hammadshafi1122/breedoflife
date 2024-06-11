import React from 'react'
import { CiHeart } from "react-icons/ci";
import { Buttons } from '../elements';
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-secondary text-white mt-auto'>
      <div className='md:flex justify-around p-6 md:p-10 space-y-4 md:space-x-96 '>
      <div className='space-y-6 space-x-16 flex' >
<div className=' flex mt-8'>
<CiHeart className='font-bold ' size={40} style={{ fontWeight: 'bold', color:"black" }}/>
<span className='font-bold text-white text-2xl md:text-4xl  relative right-2'>Give life</span>
</div>
<div className='text-white text-lg'>
<h1>
10k
</h1>
<h1>
Worldwide Client
<br></br>
Already Connected
</h1>

</div>
        </div>
        <div className='text-white space-y-10 '>
          

          <div className='space-y-2'>
          <h1 className='font-bold'>Follow Me</h1>
          <ul className='flex space-x-4 text-black'>
            <li className='bg-white rounded-full p-1'>
              <FaTwitter/>
            </li>
            <li className='bg-white rounded-full p-1'>
              <FaInstagramSquare/>
            </li>
            <li className='bg-white rounded-full p-1'><FaPinterest/></li>
            <li className='bg-white rounded-full p-1'><FaYoutube/></li>
          </ul>
          </div>

        </div>

      </div>
      <hr className='px-20'></hr>
    <div className='flex justify-center p-2'>
      <p>Designed By Themefisher Developed <span className='flex justify-center'>By Gethugothemes</span></p>

    </div>

    </div>
  )
}

export default Footer