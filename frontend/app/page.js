"use client"
import Navbar from "./Components/Navbar";
import Headers from "./Components/Headers";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Headers/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}
