import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Products from './Products';
import News from './News';
import OurPeople from './OurPeople';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { useProject } from '../../ProjectContext';
import { IoArrowBackSharp } from "react-icons/io5";



const Main = () => {
  const { showCompleteProject, setShowCompleteProject, showCompleteProject2, setShowCompleteProject2 } = useProject();

  const handleClick = () => {
    setShowCompleteProject(true);
  };
  const handleClick2 = () => {
    setShowCompleteProject2(true);
  };

  if (showCompleteProject) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/ourpeople" element={<OurPeople />} />
          <Route path="/contactus" element={<ContactUs />} />
           </Routes>
        <Footer />
      </>
    );
  }

  
  if (showCompleteProject2) {
    return (
      <>
        <h1>Project two</h1>
        <div className='mt-2 text-3xl' onClick={()=>{
    
    setShowCompleteProject2(false);
}}>

<IoArrowBackSharp />
</div>

      </>
    );
  }


  return (
    <div>
      <div className='flex flex-col justify-center w-screen h-screen items-center ' >
        <div onClick={handleClick} >
          <div>          <img className='w-[200px] sm:w-[300px] animate-bounce' src='/images/logo1.png' alt='' />
              </div>
        </div>
      
        <div className=' grid grid-cols-1 gap-7 sm:flex  gap-x-5 '>

          <div className='text-xl sm:text-2xl p-1 sm:p-3 w-[200px] sm:w-[300px] m-auto text-center bg-red-700 text-white rounded-xl' style={{border:'1px solid black'}}>
          <button>Pharmaceutical</button>

          </div>

          <div className='text-xl sm:text-2xl p-1 sm:p-3 w-[200px] sm:w-[300px] m-auto text-center bg-red-700 text-white rounded-xl' style={{border:'1px solid black'}}>
          <button>Nutraceuticals</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
