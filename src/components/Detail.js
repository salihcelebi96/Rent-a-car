import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Detail = () => {
  const selectedCar = useSelector((state) => state.selectedCar); // Redux Store'dan seçilen araba verilerini alıyoruz
  console.log(selectedCar)
  // Seçilen araba boşsa veya seçilen araba yoksa "No car selected" mesajını gösterelim
  if (!selectedCar) {
    return <div>No car selected</div>; 
  }

  // Seçilen araba varsa, seçilen araba verilerini gösteren bir kart oluşturalım
  return (
    <div className='w-ful flex justify-center my-10'>
      <div className='mt-6 w-96 bg-white flex flex-col   shadow-lg rounded-lg overflow-hidden'>
      <img src={selectedCar.image} alt="car" className="h-52 w-full object-cover object-center" />
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800">{selectedCar.name} {selectedCar.model}</h2>
        <p className="text-gray-500 text-sm">{selectedCar.year}</p>
        <p className="mt-2 text-gray-800">${selectedCar.perDayPrice}/day</p>
      </div>
    </div>
    </div>
    
  );
};

export default Detail;
