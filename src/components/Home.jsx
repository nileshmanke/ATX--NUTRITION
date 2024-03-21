import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="z-10 mt-8">
      {/* {showPopup && (
        <div className="   popup p-6 w-1/3 m-auto bg-red-700 text-white rounded-2xl" style={{ animation: "slideInFromTop 0.3s ease" }}>
           <div onClick={()=>{
            setShowPopup(false);
           }} className="float-right text-2xl text-black">
          <IoClose />
          </div>
          <h1 className="text-2xl text-black font-bold text-center mb-6">Pop Up</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            amet similique ipsa pariatur nemo sequi, nesciunt quis optio dolorem
            id, laboriosam quo saepe porro delectus cum iste enim esse
            asperiores ipsam explicabo quaerat velit. Facilis odio assumenda
            nesciunt accusamus dolores nam nobis! Aperiam commodi maxime, eius
            accusamus explicabo velit at. Modi eveniet consequatur consequuntur
            sequi dicta.
          </p>

         
        </div>
      )} */}

      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/production_id_4074432 (720p).mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="w-9/12 m-auto flex gap-y-8 sm:gap-y-0 flex-col sm:flex-row gap-x-5 mt-6 p-5 ">
        <div className="flex flex-col justify-center gap-y-6 border-2 border-black p-3">
          <div>
            <img
              className="w-[300px]"
              src="https://demo101.websartech.com/phrma/wp-content/uploads/2023/05/logo_8.png"
              alt="LOGO"
            />
          </div>

          <div>
            <p>
              Ataraxia Pharma Pvt Ltd (APPL) is a pharmaceutical & health
              sciences company operating in the Indian market for the last 5
              years.
            </p>
          </div>
          <div className="bg-black text-white rounded-lg w-[150px] text-center">
            <button>MORE DETAILS</button>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-6 border-2 border-black p-3">
          <div>
            <img
              className="w-[300px]"
              src="https://demo101.websartech.com/phrma/wp-content/uploads/2023/05/logo_8.png"
              alt="LOGO"
            />
          </div>

          <div>
            <p>
              Ataraxia Pharma Pvt Ltd (APPL) is a pharmaceutical & health
              sciences company operating in the Indian market for the last 5
              years.
            </p>
          </div>
          <div className="bg-black text-white rounded-lg w-[150px] text-center">
            <button>MORE DETAILS</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-10">
          <div className=" overflow-hidden  ">
            <img
              className="w-full scale-100 hover:scale-110 duration-1000"
              src="https://demo101.websartech.com/phrma/wp-content/uploads/2023/05/Happy-and-Healthy-Family.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="p-10 flex flex-col justify-between">
          <h1 className="text-2xl font-bold">ABOUT ATARAXIA PHARMA</h1>
          <p>
            Ataraxia, is one of the fastest growing company in last 5 years in
            India. We emphasize on attention to detail at every stage of product
            development, production process & packaging material to ensure
            integrity in end to end value chain. The company has expertise in
            offering customised solutions to unmet needs of the consumers.
            Ataraxia brings over 5 years of experience & expertise in the
            manufacturing & distribution of raw materials, excipients in India &
            abroad. We are now expanding our wings in differentiated &
            innovative formulations in collaboration with national & global
            giants.
          </p>
          <button className="bg-black text-white p-2 w-[200px] rounded-2xl ">
          <p>READ MORE</p>
          </button>
        </div>
      </div>

      <section
        className="w-11/12 m-auto h-[200px] object-contain bg-bottom  bg-no-repeat  p-5 flex justify-center items-center"
        style={{
          backgroundImage: "url('/images/pexels-jane-doan-1024248.jpg')",
        }}
      >
        <div className="flex-col sm:flex-row flex justify-between items-center  w-full text-3xl font-semibold text-black">
          <div>
            <h1>
              450+
              <br />
              Successfully
              <br />
              delivered products
            </h1>
          </div>

          <div>
            <h1>
              6+
              <br />
              Offices
              <br />
              Around the Country
            </h1>
          </div>

          <div>
            <h1>
              5+
              <br />
              Years
              <br />
              Of Experience
            </h1>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 w-11/12 m-auto mt-5">

        <div className="flex flex-col gap-y-6">
          <div >
            <h1 className="text-4xl font-bold text-center ">Why Choose Us</h1>
          </div>

          <div>
            Ataraxia Pharma Pvt Ltd (APPL) is a pharmaceutical & health sciences
            company operating in the Indian market for the last 5 years.
            Ataraxia is committed to deliver palatable and efficacious
            therapeutic products which aims to restore the health and
            nutritional balance across age groups. Ataraxia Life a division of
            APPL is founded on the core philosophy of one life, one family & one
            future. The First 1000 days is the most crucial period for the
            new-born, Health care practitioners & parents. At Ataraxia we are
            committed to make the difference with the best-in-class solutions in
            order to fulfil the unmet needs. On the other hand, Modern & urban
            lifestyles give rise to nutritional imbalances and poor health
            habits that result in loss of wellness, extending to illness.
            Ataraxia, aims to address these imbalances through therapeutically
            efficacious and innovative solutions and shift the focus in Health
            sciences from ILLNESS to WELLNESS.
          </div>
        </div>

        <div className="flex justify-center items-center">

          <img src="/images/pencil.png" alt=""/>
        </div>

      </div>


      <section
        className="w-11/12 m-auto h-[200px] object-contain bg-bottom  bg-no-repeat  p-5 flex justify-center items-center"
        style={{
          backgroundImage: "url('/images/pexels-jane-doan-1024248.jpg')",
        }}
      >

        <div className="w-full   flex justify-between">
       
<div>
  <h1 className="text-3xl font-bold">Get in touch with us.</h1>
</div>



<div className="bg-red-700 text-white font-bold text-1xl p-3 rounded-full">
  <button >Get In Touch</button>
</div>


</div>
      </section>

<div className="w-11/12 m-auto flex justify-between mt-7">


  <div>

    <h1 className="text-3xl font-bold">
    State of the art<br/>
End to End solutions
    </h1>
  </div>


  <div>
    <h1  className="text-3xl font-bold">
    Empowering life with right<br/>
need identification

    </h1>
  </div>


</div>

<div className="grid grid-cols-3 gap-4 mt-5">
  <div className="p-6">
    <p>
      
     <li className="">Highly Capable Research & Development</li>
      <br/>
    
Procurement of World Class ingredients
Robust Manufacturing Process
Regulatory compliance & Documentation
Third party analytical validation
Excellent packaging
Strategic Availability of the products
Consumers today are well informed & are more inclined to consume health supplements that offer substantive preventive health benefits.

One of our key focus areas in research is being done on functional ingredients that can function as products by themselves or in combination with other ingredients that provide greater health benefits to the body.</p>
  </div>

  <div className="p-6 flex justify-center items-center">
    <p>
    Infant Nutrition
Cognitive Health
Constipation
Gut brain Axis
Digestive Health
Multi-vitamin supplements
Wellness And Immunity
Nutritional Supplements
Autoimmune Disorders
Weight Management
    </p>
  </div>
  <div className="p-6 flex justify-center items-end">
    <img className="w-[200px]" src="/images/medicine.png" alt=""/>
  </div>
</div>


    </div>
  );
};

export default Home;
