import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useProject } from '../../ProjectContext';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {

    const { showCompleteProject, setShowCompleteProject, showCompleteProject2, setShowCompleteProject2 } = useProject();

    const navigate=useNavigate();
    const [aboutdrop, setaboutdrop] = useState(false);
    const [productsdrop, setproductsdrop] = useState(false);
    const [pharmadrop, setpharmadrop] = useState(false);
    const [lifedrop, setlifedrop] = useState(false);
    const [menu, setmenu] = useState(false);
    const [aboutdropdown, setaboutdropdown] = useState(false);
    const [productsdropdown, setproductsdropdown] = useState(false);
  return (
    <div>
<div>

<div className='bg-black p-2 sm:p-5'>
<div className=' w-11/12 m-auto text-white flex justify-between'>

<div className='mt-0 sm:mt-2 text-xl sm:text-3xl' onClick={()=>{
    
    setShowCompleteProject(false);
    navigate("/");
}}>

<IoArrowBackSharp />
</div>
    <div>
<h1 className=' hidden sm:block text-xs sm:text-base font-semibold'>REALM OF POSSIBILITIES</h1>
    </div>


    <div  className='flex gap-x-2 justify-center'>
        <div className=' text-sm sm:text-base font-semibold'><h1>Follow Us:</h1> </div>
        <div className='text-white text-base  '><FaYoutube /> </div>
    </div>

</div>


</div>


<div className='flex justify-between bg-white text-black text-xl p-3 sm:p-5 bg-opacity-40'>
    <div className='flex gap-x-2'>
        <div>
            <img className= 'w-[100px] sm:w-[200px]' src='/images/mainlogo.png' alt='LOGO 1'/>
        </div>

        {/* <div>
            <img src='' alt='LOGO 2'/>
        </div> */}
    </div>

    <div onClick={()=>{
        setmenu(!menu);
    }} className='block sm:hidden mt-2'>

    {menu ? <IoCloseSharp />: <FaBars />}

    </div>

    <div className='hidden sm:flex gap-x-10 lg:text-base xl:text-xl md:text-base '>
<div>
    <Link to="/">Home</Link>
</div>

<div className='relative' onMouseEnter={()=>{
    setaboutdrop(true);
}}  onMouseLeave={()=>{
    setaboutdrop(false);
}}>
    <Link to="/about">
        <div className='flex justify-center gap-x-1'>
        <div>About </div> 
        <div className={`mt-2 ${aboutdrop ? "rotate-180" : ""}`}><IoIosArrowDown />
        </div>

        </div>
       
       
        </Link>

    <div className={`absolute top-7 w-[200px] p-3 text-sm bg-white shadow-2xl ${aboutdrop ? "block" : "hidden"}`} style={{animation: 'slideInFromTop 0.5s ease'}}>
        <div>
            COMPANY OVERVIEW
        </div>
    </div>
</div>

<div className='relative' onMouseEnter={()=>{
    setproductsdrop(true);
}} onMouseLeave={()=>{
    setproductsdrop(false);
}}>
    <Link to="/products">

        <div className='flex justify-center gap-x-1' >
            <div>Our Products</div>
            <div className={`mt-2 ${productsdrop ? "rotate-180" : ""}`}><IoIosArrowDown />
        </div>

        </div>
        
        
        </Link>

    <div className={`absolute text-base  flex flex-col p-2 gap-y-3 shadow-2xl w-[150px] ${productsdrop ? "block": "hidden"}` } style={{animation: 'slideRight 0.5s ease'}}>
        <div  className='relative' onMouseEnter={()=>{
                    setpharmadrop(true);
                }} onMouseLeave={()=>{
                    setpharmadrop(false);
                }} >

            <div>
                
                <div>PHARMA</div>
<div className={` absolute top-0 left-[130px] z-50  flex flex-col gap-y-4 p-3 shadow-2xl bg-white ${pharmadrop ? "block": "hidden" }`} style={{animation: 'slideRight 0.5s ease'}}>
    <div>SOURCING</div>
    <div>MANUFACTURING</div>
</div>
            </div>
        </div>
        <hr/>
        <div className='relative' onMouseEnter={()=>{
            setlifedrop(true);

        }} onMouseLeave={()=>{
            setlifedrop(false);
        }}>
            <div>LIFE</div>
            <div className={`absolute w-[300px] p-4 top-[-10px] left-[130px] z-50 shadow-2xl bg-white ${lifedrop ? "block" : "hidden"}`} style={{animation: 'slideRight 0.5s ease'}}>
                <div>
                    BRANDED FORMULATION
                </div>
            </div>
        </div>
    </div>
</div>

<div>
    <Link to="/news">News</Link>
</div>

<div>
    <Link to="/ourpeople">Our People</Link>
</div>

<div>
    <Link to="/contactus">Contact Us</Link>
</div>


    </div>

    
</div>


</div>

<div className={` ${ menu ? "block" :"hidden"} block sm:hidden  w-screen h-[1200px] p-3 bg-slate-700`} style={{animation: 'slideRight  0.5s ease'}}>

    <div className='flex flex-col justify-center place-items-start text-xl text-white gap-6'>


<Link onClick={()=>{
    setmenu(false);
}} to="/">
<div  className='ml-[40px]'>
    Home
</div>

</Link>


<div  >
<div onClick={()=>{
    setaboutdropdown(!aboutdropdown);
    setproductsdropdown(false);
}} className='ml-[40px] '>

    <div className='flex justify-center items-center'>
        <div> About</div>
        <div className='mt-1 ml-2'><span className={` ${ aboutdropdown ? "rotate-180" :""}`}><RiArrowDropDownLine /> </span></div>
    </div>
   <Link onClick={()=>{
    setmenu(false);
}} to="/about" className={`  mt-3 ${aboutdropdown ? "block" :"hidden"} `}  style={{animation: 'slideRight  0.5s ease'}}>
<div className='text-sm'>
   <ul >
    <li className='text-white bg-red-700 p-2'> COMPANY OVERVIEW</li>
   </ul>
   
</div>


   </Link>
</div>

</div>


<Link  to="/products">
<div onClick={()=>{
    setproductsdropdown(!productsdropdown);
    setaboutdropdown(false);
}} className='ml-[40px]'>
    <div className='flex justify-center items-center'>
        <div>Products</div>
        <div className='mt-1 ml-2'><span className={` ${ productsdropdown ? "rotate-180" :""}`}><RiArrowDropDownLine /> </span></div>
    </div>

    <div  className={`  text-base mt-3 ${productsdropdown ? "block" :"hidden"} `}  style={{animation: 'slideRight  0.5s ease'}}>

<ul>
    <li className='text-white bg-red-700 p-2 mt-2 '>
    <Link to="/products" onClick={()=>{
    setmenu(false);
}} >Pharma</Link>

</li>

<li className='text-white bg-red-700 p-2 mt-2 '>
    <Link  onClick={()=>{
    setmenu(false);
}} to="/products" >Sourcing</Link>
</li>


<li className='text-white bg-red-700 p-2 mt-2 '>
    <Link onClick={()=>{
    setmenu(false);
}} to="/products" >Manufacturing</Link>
</li>
</ul>

    </div>
</div>

</Link>


<Link onClick={()=>{
    setmenu(false);
}} to="/news">
<div className='ml-[40px]'>
    news
</div>

</Link>


<Link onClick={()=>{
    setmenu(false);
}} to="/ourpeople" >
<div className='ml-[40px]'>
    Our People
</div>
</Link>


<Link onClick={()=>{
    setmenu(false);
}} to="/contactus">
<div className='ml-[40px]'>
    contact us
</div>
</Link>

    </div>

    </div>


    </div>
  )
}

export default Header