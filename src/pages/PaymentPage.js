import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import masterCard from "../assets/mastercard.svg"
import visa from "../assets/visa.svg"
import {Link} from "react-router-dom"

const PaymentPage = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(state => state.totalPrice);
  console.log(totalPrice)

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); 
    if (input.length > 2) {
      
      setExpiryDate(input.slice(0, 2) + '/' + input.slice(2));
    } else {
      setExpiryDate(input);
    }
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); 
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 '); 
    setCardNumber(formattedInput);
  };

  const handlePaymentSubmit = () => {
    
    dispatch({ type: 'SET_EMAIL', payload: email });
    dispatch({ type: 'SET_CARD_NUMBER', payload: cardNumber });
    dispatch({ type: 'SET_EXPIRY_DATE', payload: expiryDate });
    dispatch({ type: 'SET_CVV', payload: cvv });
    dispatch({ type: 'SET_CARDHOLDER_NAME', payload: cardholderName });
    
    
    console.log('Payment Information:', {
        email,
        cardNumber,
        expiryDate,
        cvv,
        cardholderName,
      });
    
  };

  const isFormValid = () => {
    return (
      email !== '' &&
      cardNumber !== '' &&
      expiryDate !== '' &&
      cvv !== '' &&
      cardholderName !== ''
    );
  };

  return (
    <div className='flex justify-center items-center '>
      <div className='w-96  flex flex-col mt-14 border border-blue-800 p-5 items-center gap-3 '>
        <div>
          <h1 className='text-3xl'>Pay with card</h1>
        </div>
        <div className='flex flex-col'>
          <label>Email :</label>
          <input
            className={`border rounded-md ${isEmailValid ? '' : 'border-red-500'}`}
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && (
            <p className="text-red-500">Please enter a valid email address.</p>
          )}
        </div>
        <div className='flex flex-col'>
          <label>Card Number :</label>
          <div className=' relative '>
             <div>
            <input
            className="border rounded-md py-1 "
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx" 
            required
          />
          </div>
            
                
           <div className="visa transform   flex absolute  right-1 top-2"> {/* Adjust the position of the icons */}
           {cardNumber.startsWith('4') && <img src={visa} alt="Visa" className="w-7 border rounded-sm " />} 
           {cardNumber.startsWith('5') && <img src={masterCard} alt="Mastercard" className="w-7 border rounded-sm" />}
          </div>

          </div>
         
         
        </div>
        <div className='flex flex-col'>
          <label>Expiry Date :</label>
          <input
            className='border rounded-md '
            type="text"
            name="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="5"
            pattern="\d\d/\d{4}" 
            placeholder="MM/YYYY"
            required
          />
        </div>
        <div className='flex flex-col'>
          <label>CVV :</label>
          <input className='border rounded-md ' maxLength={3} type="text" name="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label>Cardholder Name :</label>
          <input className='border rounded-md' type="text" name="cardholderName" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
        </div>
        <div className='flex '>
          <label>Total Price :</label>
          <div>{totalPrice}</div>
        </div>
        <div>
          {isFormValid() ? (
            <Link
              to="/ordered"
              className='text-white border bg-gray-700 hover:bg-gray-600 px-2 rounded-md p-1 font-bold'
              onClick={handlePaymentSubmit}
            >
              Submit Payment
            </Link>
          ) : (
            <div className='text-white border bg-gray-700 opacity-50 cursor-not-allowed px-2 rounded-md p-1 font-bold'>
              Submit Payment
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentPage;
