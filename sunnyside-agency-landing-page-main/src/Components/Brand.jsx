import React from "react";
import image from "../assets/image-transform.jpg";
import image2 from "../assets/image-stand-out.jpg";

function Brand() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 p-12 flex flex-col justify-center">
          <h3 className="font-bold text-3xl font-fraunces">
            Trasform your brand
          </h3>
          <p className="text-gray-500 mt-3 ">
            We are a full service creative agency speclizing in helping brands
            grow fast Engage your clients through compelling visuals that do
            most of the marketing for you
          </p>
          <div className="grid">
          <a href="#" className="mt-6 font-fraunces font-bold text-left">
            LEARN MORE
          </a>
          <span className="w-32 rounded-full py-0.5 -mt-[7px] bg-yellow-300"></span>
          </div>
        </div>
        <img src={image} alt="first image" className="order-1 lg:order-2" />
        {/* second section */}
        <img src={image2} alt="second image" className="order-3" />
        <div className="order-4 flex flex-col justify-center p-12">
          <h3 className="font-bold text-3xl font-fraunces">
            Stand out to the right audience
          </h3>
          <p className="text-gray-500 mt-3 ">
            Using a collabrative formual of designers,researchers,photographers,videographers,
            and copywriters,we'll build and extend your band in digital places.
          </p>
          <div className="grid">
          <a href="#" className="mt-6 font-fraunces font-bold text-left">
            LEARN MORE
          </a>
          <span className="w-32 rounded-full py-0.5 -mt-[8px] bg-orange-400"></span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
