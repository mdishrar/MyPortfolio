import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Navbar=()=>{

    const sideMenuRef=useRef();
    const [isScroll,setScroll]= useState(false);

    const openMenu=()=>{
        sideMenuRef.current.style.transform='translate(-16rem)'
    }
    const closedMenu=()=>{
        sideMenuRef.current.style.transform='translate(16rem)'
    }
useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = (scrolled / scrollableHeight) * 100;

      if (scrollPercentage >= 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);
    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>
            <nav className={`flex w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
             items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":"bg-transparent"}`}>
                <a href="#top">
                    <Image src={assets.logo}  alt="" className="w-70 cursor-pointer mr-14"/>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                 ${isScroll ? "bg-white shadow-sm bg-opacity-50 backdrop-blur-lg":"bg-white shadow-sm bg-opacity-50"} `}>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#top">Home</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#about">About me</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#services">Services</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#work">My Work</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#contact">Contact me</a></li>
                </ul>
                <div className="flex items-center gap-4">
                    <button className="">
                        <Image src={assets.moon_icon} alt="" className="w-6" />   
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-3
                     px-10 py-2.5 border border-gray-500 rounded-full ml-4">Contact
                        <Image src={assets.arrow_icon} alt="" className="w-3" />
                    </a>
                    <button className="block md:hidden ml-3" onClick={openMenu}> 
                        <Image src={assets.menu_black} alt="" className="w-6"></Image>
                    </button>
                </div>

                {/* for mobile users  */}
                
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                 top-0 bottom-0 w-64 z-50 bg-rose-50 transition duration-500">
                    <div className="absolute right-6 top-6" onClick={closedMenu}>
                        <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
                    </div>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300"  onClick={closedMenu} href="#top">Home</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300"  onClick={closedMenu} href="#about">About me</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300"  onClick={closedMenu} href="#services">Services</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300"  onClick={closedMenu} href="#work">My Work</a></li>
                    <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300"  onClick={closedMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar