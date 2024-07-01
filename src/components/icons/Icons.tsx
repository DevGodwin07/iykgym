import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";

const Icons = () => {
  return (
    <div className=" flex gap-5">
      <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer bg-primary-400">
        <FaFacebookF size={25} color="white" />
      </div>
      <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer bg-primary-400">
        <GrTwitter size={25} color="white" />
      </div>
      <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer bg-primary-400">
        <FaSquareInstagram size={25} color="white" />
      </div>
      <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer bg-primary-400">
        <FaLinkedinIn size={25} color="white" />
      </div>
    </div>
  );
};

export default Icons;
