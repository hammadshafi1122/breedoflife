import React from 'react'

function Input() {
  return (
    <div>
        <div className='grid grid-cols-1 space-y-2'>
                    <label className="font-semibold">First Name</label>
                    <input className='bg-greenish p-2' placeholder='Your Name'></input>
                </div>
    </div>
  )
}

export default Input