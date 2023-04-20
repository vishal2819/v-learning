import React, { useState } from "react";
import Typed from "react-typed";
import axios from "axios";

function Hero() {
  const [clicked, setClicked] = useState(false);

 function handleClick() {
    try {
          axios("/checkout");
      setClicked(!clicked);
      window.location.href = "https://braintree-payment.vercel.app/";
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-white">
      <div
        className="max-w-[830px] mt-[-96px] w-full h-screen mx-auto
     text-center flex flex-col justify-center"
      >
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH FULL STACK WEB DEVELOPMENT
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Learn to code by watching others
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            {" "}
            Creative,Logical learning for{" "}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl md:pl-4 pl-2 text-xl font-semibold"
            strings={["ReactJs", "Node", "AWS", "GIT"]}
            typeSpeed={12}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Transform your ideas into reality with our web experts
        </p>
        <button
          onClick={handleClick}
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
