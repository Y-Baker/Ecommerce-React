import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import ProductPage from './components/product/product-page';
import Footer from './components/footer/footer';

const App = () => {
  return <div className='overflow-hidden'>
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
