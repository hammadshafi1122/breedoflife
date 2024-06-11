import React from 'react';
import { Dp } from '../../assets/images';

function HeaderSection() {
  

  return (
      
        
          <div className='  py-16 px-4 md:p-16 space-y-8 md:space-x-40 md:flex '>
            <div className='  text-white space-y-10 '>
              <h3 className='flex justify-center'>Give Hope For Homeless</h3>
              <h1 className='text-white text-4xl md:text-5xl font-bold  '><span className='flex justify-center md:ml-10'>Helping Each Other</span>
                <span className='flex justify-center'>Can Make World</span> <span className='flex justify-center'>Better</span></h1>
              <p className=''>We Seek out world changers and difference makers around the
             
                globe, and <span className='flex justify-center'>equip  them to fulfill their unique purpose.</span></p>
              
            </div>
            <div className='bg-lightGray border-4  border-white w-72 h-72 flex ml-10'>
            <img className='object-cover	 ' src={Dp}></img>


        </div>
          </div>
      
    
  );
}

export default HeaderSection;
