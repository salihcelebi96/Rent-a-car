import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';

const Calendar = () => {
  const dispatch = useDispatch();



  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDays, setSelectedDays] = useState(0);
  const perDayPrice = useSelector((state) => state.selectedCar.perDayPrice);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  useEffect(() => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setSelectedDays(diffDays);
    } else {
      setSelectedDays(0);
    }
  }, [startDate, endDate]);

  const totalPrice = selectedDays * perDayPrice;
  useEffect(() => {
    dispatch({ type: 'TOTAL_PRICE', payload: totalPrice });
  }, [totalPrice, dispatch]);

  return (
    <div className="w-full justify-center items-center gap-8 flex my-10">
      <div className='border rounded-md bg-green-800 p-3'>
        <h2 className='py-2   text-white font-semibold'>Başlangıç Tarihi Seçin:</h2>
        <DatePicker className='cursor-pointer' selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div className='border rounded-md bg-green-800 p-3'>
        <h2 className='text-white   py-2 font-semibold'>Bitiş Tarihi Seçin:</h2>
        <DatePicker className='cursor-pointer' selected={endDate} onChange={handleEndDateChange} />
      </div>
      <div className='flex gap-5'>
        <div className='bg-gray-700  border p-3 w-72 rounded-sm text-white'>
          <h2>Seçilen Başlangıç Tarihi : {startDate ? startDate.toLocaleDateString() : '-'}</h2>
        </div>
        <div className='bg-gray-700 border  w-72 p-3 rounded-sm text-white'>
          <h2>Seçilen Bitiş Tarihi : {endDate ? endDate.toLocaleDateString() : '-'}</h2>
        </div>
        <div className='bg-gray-700 border  w-72 p-3 rounded-sm text-white'>
          <h2>Seçilen Gün Sayısı : {selectedDays}</h2>
        </div>
        <div className='bg-gray-700 border flex  w-72 p-3 rounded-sm text-white'>
          <div>
            Toplam Fiyat :
          </div>
          <div className='px-1 text-yellow-500'>
            ${totalPrice}
          </div>
          
        </div>

       </div>
    </div>
  );
};

export default Calendar;