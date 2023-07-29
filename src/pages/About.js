import React from 'react';
import Navbar from "../components/Navbar";
import { FaCheck } from 'react-icons/fa';

const About = () => {
    return (
        <div className='flex flex-col'>
            
            <div className='about flex flex-col justify-center items-center mt-10'>
                <div className='text-4xl font-bold mb-4 text-yellow-500'>
                    About us
                </div>
                <div className='text-lg mb-4 font-semibold text-blue-900'>
                    Welcome to Car Rent Service
                </div>
                <div className='w-[650px] text-center my-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eu massa sit amet turpis lacinia aliquam at ac odio.
                    Nulla facilisi. Nam id elementum velit. Integer sagittis dolor ac quam consequat tincidunt.
                    Sed at nunc et nisl facilisis euismod. Ut ac velit eget neque rhoncus iaculis.
                </div>
                <div className='mt-4'>
                    <ul className='grid grid-cols-2 gap-8'>
                        <li className='mb-2 flex items-center'>
                            <FaCheck className='mr-2 text-green-500' />
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li className='mb-2 flex items-center'>
                            <FaCheck className='mr-2 text-green-500' />
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li className='mb-2 flex items-center'>
                            <FaCheck className='mr-2 text-green-500' />
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li className='mb-2 flex items-center'>
                            <FaCheck className='mr-2 text-green-500' />
                            Lorem ipsum dolor sit amet.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
