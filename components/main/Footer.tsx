import React from "react";
import {
  RxFileText,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">My Email</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer"> 
                        <RxFileText/>
                        <span className="text-[15px] ml-[6px]">harisrafli0@gmail.com</span>    
                    </p>
                </div>
            </div>
            <br></br>
            <div className="mb-[20px] text-[15px] text-center">
                &copy; 2024 Haris Rafli Agustin
            </div>
        </div>
    </div>
  )
}

export default Footer