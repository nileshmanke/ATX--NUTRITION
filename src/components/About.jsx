import React from "react";

const About = () => {
  return (
    <div>
      <section
        className="w-11/12 m-auto h-[200px] object-contain bg-bottom  bg-no-repeat  p-5 flex justify-center items-center"
        style={{
          backgroundImage: "url('/images/pexels-jane-doan-1024248.jpg')",
        }}
      >
        <div className="w-full flex  items-end ">
          <h1 className="font-bold text-3xl animate-bounce">About Us</h1>
        </div>
      </section>

      <div className="w-11/12 grid-cols-3 gap-3 flex  m-auto mt-5">
        <div className="flex  flex-col gap-y-3  justify-center items-center p-3 bg-[#ecf0f1]">
          <div>
            <img src="/images/aboutimg1.png" alt="" />
          </div>

          <div className="text-2xl font-bold">
            <h1>Our Vision</h1>
          </div>

          <div className=" w-1/2 ">
            <p>
              To improve quality of life by offering healthcare solution with
              scientific evidence & Improved access
            </p>
          </div>
        </div>

        <div className="flex  flex-col gap-y-3  justify-center items-center p-3 bg-[#ecf0f1]">
          <div>
            <img src="/images/aboutimg1.png" alt="" />
          </div>

          <div className="text-2xl font-bold">
            <h1>Our Vision</h1>
          </div>

          <div className=" w-1/2 ">
            <p>
              To improve quality of life by offering healthcare solution with
              scientific evidence & Improved access
            </p>
          </div>
        </div>

        <div className="flex  flex-col gap-y-3  justify-center items-center p-3 bg-[#ecf0f1]">
          <div>
            <img src="/images/aboutimg1.png" alt="" />
          </div>

          <div className="text-2xl font-bold">
            <h1>Our Vision</h1>
          </div>

          <div className=" w-1/2 ">
            <p>
              To improve quality of life by offering healthcare solution with
              scientific evidence & Improved access
            </p>
          </div>
        </div>
      </div>

      <div className="text-2xl font-bold text-center mt-5 ">
        <h1>COMPANY OVERVIEW</h1>
      </div>

      <div className="grid grid-cols-2 mt-11">
        <div>
          <video
            className="w-full h-[400px]"
            src="/videos/pexels-artem-podrez-5752054 (2160p).mp4"
            autoPlay
            muted
            loop
          />
        </div>

        <div className="flex  flex-col gap-y-7 justify-center">
          <div>
            <h1 className="text-2xl font-bold text-center">
              Brings your ideas to life!
            </h1>
          </div>

          <div>
            <p>
              Ataraxia brings over 5 years of experience & expertise in the
              manufacturing & distribution of raw materials, excipients in India
              & abroad. We are now expanding our wings in differentiated &
              innovative formulations in collaboration with national & global
              giants. Ataraxia, is one of the fastest growing companies in the
              last 5 years in India. We emphasize on attention to detail at
              every stage of product development, production process & packaging
              material to ensure integrity in the end to end value chain. The
              company has expertise in offering customised solutions to unmet
              needs of the consumers.
            </p>
          </div>
        </div>
      </div>

      <div className="text-2xl font-bold text-center mt-9">
        <h1>Our Young & Dynamic leaders</h1>
      </div>

      <div className="flex w-9/12 m-auto justify-center  bg-slate-400 p-8">
        <div className="">
          <img className="w-[600px] h-[300px]" src="/images/md.png" alt="" />
        </div>

        <div className="flex justify-center items-center p-6  ">
          <div>
            <div>
            <h1 className="text-red-700 text-2xl font-semibold">Mr. Akshay Dalal MD (Managing Director), Ataraxia Group</h1>

            </div>

            <div>
              Akshay is an extremely passionate and ambitious Entrepreneur and a
              subject matter expert in pharmaceutical, food and nutraceutical
              field. With the background of formulations, business development,
              Chemistry, quality assurance and people’s management skills.
              Akshay is on his growth journey to build multiple businesses,
              create job opportunities and connect people to deliver the
              guaranteed success with happiness
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
