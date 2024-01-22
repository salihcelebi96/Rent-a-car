import React from 'react';
import { Link } from 'react-router-dom'; 
import { AiFillCar } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="flex items-center justify-around">
        <div className="flex items-center">

            <Link to="/" className="flex items-center text-white">
            <AiFillCar size={32} className="text-white mr-2" />
            <h1 className="text-white sm:text-base  md:text-xl font-bold">Rent a Car</h1>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
