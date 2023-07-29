import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Detail from "../components/Detail"
import Calendar from "../components/Calendar"

const DetailPage = () => {
  return (
    <div>
      
      
      <div className='flex flex-col'> 
      <div>
        <Calendar/>
      </div>
        <div>
          <Detail/>
      </div>
      <div className='   text-red-600 flex justify-center '>
      <Link to="/payment" className="font-semibold border-red-700 text-3xl cursor-pointer border rounded-md py-2 px-5 hover:bg-red-800 hover:text-white">
      Payment
    </Link>
      </div>
      </div>
      
    </div>
  )
}

export default DetailPage
