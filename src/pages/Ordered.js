import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
const Ordered = () => {
  return (
    <div className=' h-screen flex flex-col  justify-center items-center gap-10'>
        <div>
        <AiOutlineCheckCircle size={90}   color="green" />
        </div>
      <div>
        <h1 className='text-4xl'>Rental completed</h1>
      </div>
    </div>
  )
}

export default Ordered
