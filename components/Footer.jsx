import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full p-8 max-md:p-1.5 mx-4 max-md:mx-1.5 bg-red-500 flex flex-row items-center gap-10">
      {/** container */}
      <div className="w-full px-12 max-md:px-6 flex max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-6 justify-between mb-6">
        <div className="flex flex-row text-white">
          <span className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px] rounded-full p-1 bg-white flex items-center justify-center">
            <IoIosCall className="text-red-500 text-xl max-md:text-lg" />
          </span>
          <h2 className="mt-2 ml-2 text-[16px] max-md:text-[14px]">
            Toll free <span className="font-semibold">1800 200 1234</span>
          </h2>
        </div>

        <div className="flex flex-row text-white">
          <span className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px] rounded-full p-1 max-md:p-1.5 bg-white flex items-center justify-center">
            <FaFacebookF className="text-red-500 text-xl max-md:text-md" />
          </span>
          <h2 className="mt-2 ml-2 text-[16px] max-md:text-[14px]">www.facebook.com/cripumps</h2>
        </div>

        <div className="flex flex-row text-white">
          <span className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px] rounded-full p-1 bg-white flex items-center justify-center">
            <TfiWorld className="text-red-500 text-xl max-md:text-lg" />
          </span>
          <h2 className="mt-2 ml-2 text-[16px] max-md:text-[14px]">www.cripumps.com</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
