import React, { useState } from 'react';
import { Buttons } from '../elements';

function HeaderSection({}) {
  

  return (
    <div>
      
        
          <div className=' py-16 px-4 md:p-16 space-y-8'>
            <div className='  text-white space-y-3  justify-center'>
              <h3 className='flex justify-center'>Give Hope For Homeless</h3>
              <h1 className='text-white text-4xl md:text-6xl font-bold  '><span className='flex justify-center md:ml-10'>Helping Each Other</span>
                <span className='flex justify-center'>Can Make World</span> <span className='flex justify-center'>Better</span></h1>
              <p className='md:flex justify-center'>We Seek out world changers and difference makers around the
                <br></br>
                globe, and equip them to fulfill their unique purpose.</p>
              <div className='flex justify-center space-x-3 pt-4'>
                <Buttons
                  type={"primary"}
                  title="Contact us"/>
                <Buttons
                  type={"secondary"}
                  title= "Know about us"/>
              </div>
            </div>
          </div>
      
    </div>
  );
}

export default HeaderSection;
