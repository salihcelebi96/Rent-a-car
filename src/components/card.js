import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import bmwImage from "../assets/bmw.png";
import mercedesImage from "../assets/mercedes.png";
import nissanImage from "../assets/nissan.png";
import teslaImage from "../assets/tesla.png";
import toyotaImage from "../assets/toyota.png";
import toyota2Image from "../assets/toyota2.png";


const CarsData = [
    {
      name: "Bmw",
      model: "430i",
      year: "2014",
      perDayPrice: 50,
      image: bmwImage,
    },
    {
      name: "Mercedes",
      model: "C180",
      year: "2011",
      perDayPrice: 40,
      image: mercedesImage,
    },
    {
      name: "Nissan",
      model: "altima",
      year: "2021",
      perDayPrice: 45,
      image: nissanImage,
    },
    {
      name: "Tesla",
      model: "model 3",
      year: "2020",
      perDayPrice: 55,
      image: teslaImage,
    },
    {
      name: "Toyota",
      model: "cambry",
      year: "2020",
      perDayPrice: 40,
      image: toyotaImage,
    },
    {
      name: "Toyota",
      model: "mcambry",
      year: "2015",
      perDayPrice: 35,
      image: toyota2Image,
    },
  ];
  

const Cars = () => {
  const selectedCar = useSelector((state) => state.selectedCar);
  const dispatch = useDispatch();

  const handleSelectCar = (car) => {
    dispatch({ type: 'SELECT_CAR', payload: car });
    console.log("Selected car:", car);
  };

  return (
    <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 mx-2 mt-5 gap-6'>
      {CarsData.map((car, index) => (
        <div key={index} className="mt-6 w-96 bg-white flex flex-col shadow-lg rounded-lg overflow-hidden">
          <img src={car.image} alt="car" className="h-52 w-full object-cover object-center" />
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800">{car.name} {car.model}</h2>
            <p className="text-gray-500 text-sm">{car.year}</p>
            <p className="mt-2 text-gray-800">${car.perDayPrice}/day</p>
            <div className='mt-5 '>
              <Link to={`/detail`} className="border hover:bg-blue-700 bg-blue-900  text-white mx-1  py-2 px-16  rounded-sm" onClick={() => handleSelectCar(car)}>Rent</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
