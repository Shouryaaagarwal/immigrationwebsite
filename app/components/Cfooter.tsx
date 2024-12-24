"use client"   
import React from "react"   
import { CgMail } from "react-icons/cg"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import { MdOutlinePhone } from "react-icons/md"


export default function Cfooter(){
    return( 
        <footer className="bg-[#f1f1f1] h-[60vh] text-white py-8 flex p-10 ">
         <div className="flex text-black flex-col gap-3">
            <h1 className="font-bold text-lg">Support</h1>
            <div className="mt-5 flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <CgMail />
                </span>
                <span className="font-extralight text-sm">
                  info@seaviewimmigration.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <CgMail />
                </span>
                <span className="font-extralight text-sm">
                  seaviewimmigration@gmail.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <MdOutlinePhone/>
                </span>
                <span className="font-extralight text-sm">+1(639) 916-1751</span>
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <ImLocation />
                </span>
                <span className="font-extralight text-sm">Appointments Only</span>
              </div>
            </div>
          </div>
        <div className=" text-black h-[400px] w-[800px] flex  gap-10  ml-[100px]">
          
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg">Support</h1>
            <div className="mt-5 flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <CgMail />
                </span>
                <span className="font-extralight text-sm">
                  info@seaviewimmigration.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <CgMail />
                </span>
                <span className="font-extralight text-sm">
                  seaviewimmigration@gmail.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <MdOutlinePhone/>
                </span>
                <span className="font-extralight text-sm">+1(639) 916-1751</span>
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <ImLocation />
                </span>
                <span className="font-extralight text-sm">Appointments Only</span>
              </div>
            </div>
          </div>
         
          <div className="ml-10 flex flex-col gap-3">
            <h1 className="font-bold text-lg">Follow us</h1>
            <div className=" mt-5 flex gap-8">
              <span className="text-2xl">
                <FaFacebookF />
              </span>
              <span className="text-2xl">
                <FaInstagram />
              </span>
              <span className="text-2xl">
                <FaLinkedinIn />
              </span>
            </div>
            <div className="mt-5">
              <input
                placeholder="Enter your email"
                className="px-2 rounded-md h-[40px] w-[400px] focus:outline-none focus:ring-0"
                type="email"
              />{" "}
            </div>
            <div className="flex mt-2">
              <button className="px-10 py-3 text-white bg-[#155da9]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </footer>
    )
}