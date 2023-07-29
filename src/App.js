import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/DetailPage';
import Contact from './pages/Contact';
import Card from "./components/card"
import Navbar from './components/Navbar';
import PaymentPage from './pages/PaymentPage';
import Ordered from "./pages/Ordered";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/ordered" element={<Ordered/>} />

        
      </Routes>
    </Router>
  );
};

export default App;
