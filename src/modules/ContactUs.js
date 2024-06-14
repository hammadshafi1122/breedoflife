import React from 'react'
import { Buttons } from '../components/elements'
import Title from '../components/elements/Title'
import Input from '../components/elements/Input'
function ContactUs() {
  return (
    <div className='p-10 space-y-10'>
        <Title title="Get in Touch" heading="Send Me A Message"/>
        <div className='space-y-10 md:grid md:grid-cols-2  md:gap-5 md:space-x-20 '>
            <div className='space-y-8'>
               <div className='grid grid-cols-2 gap-5'>
               <Input/>
                <Input/>
                <Input/>
                <Input/>
               <Input/>

               </div>
               <Buttons type="primary" title="Send Message"/>


            </div>
            <div className='bg-greenish p-5 space-y-8'>
                <h1 className='text-black text-3xl font-bold'>Address</h1>
                <p>Quam elementum pulvinar etiam non quam lacus
suspendisse.A scelerisque purus semper eget duis at
Lobortisscelerisque fermentum dui faucibus in ornare....</p>
<div>
<p><span className='font-bold'>Location:</span> 4517 Washington Ave. Manchester,
Kentucky 39495</p>
<p><span className='font-bold'>Phone:</span> +88544767456</p>
<p><span className='font-bold'>Email:</span>  givelifecharity@gmail.com</p>
</div>


            </div>
        </div>
    </div>
  )
}

export default ContactUs