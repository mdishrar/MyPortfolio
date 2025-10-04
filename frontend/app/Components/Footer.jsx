import React from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <Image 
          src={assets.logo} 
          alt="Logo" 
          className="w-90 mx-auto mb-2"
        />        
        <div className="w-max items-center flex gap-2 mx-auto">
          <Image 
            src={assets.mail_icon} 
            alt="Email" 
            className="w-6 sm:w-6 cursor-pointer hover:scale-150 transition-transform duration-300"
          />
          muhammadishrar9@gmail.com
        </div>
      </div>
      
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"> 
        <p className="py-5 text-center text-xs sm:text-sm text-gray-500 dark:text-white/60">
          © 2025 Md Ishrar. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li className="hover:text-blue-500 transition-colors duration-300"><a target="_blank" href="https://github.com/mdishrar" >Github</a></li>
            <li className="hover:text-blue-500 transition-colors duration-300"><a target="_blank" href="">Linkedin</a></li>
            <li className="hover:text-blue-500 transition-colors duration-300"><a target="_blank" href="https://x.com/120_b2">Twitter</a></li>
        </ul>
      </div> 
    </div>
  )
}

export default Footer