import React, { useEffect, useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiMap } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { BiLogoTelegram } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
const Contact = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);

  return (
    <>
      <div id='bg-head' className='w-full h-[450px]'>
        <div className='w-full h-[450px] bg-black/70'>
          <div className="w-full min-w-[320px] bg-cover bg-center">
            <div id="header-div" className="w-full min-h-[120px] relative">
              <div className="flex items-center justify-between px-6 md:px-10 h-[120px]">
                <img src="/logo.png" className="w-[120px] md:w-[140px]" alt="Logo" />
                
                <nav className="hidden md:flex text-white gap-8 items-center">
                  <Link className="cursor-pointer" to="/">Home</Link>
                  <Link className="cursor-pointer" to="/about">About Us</Link>
                  <Link className="cursor-pointer" to="/menu">Menu</Link>
                  <Link className="text-[#FFBA00] cursor-pointer" to="/contact">Contact Us</Link>
                  <button className="w-[140px] h-12 cursor-pointer text-black bg-[#FFBA00] rounded-sm">Shop Online</button>
                </nav>

                <GiHamburgerMenu
                  onClick={() => setClick(prev => !prev)}
                  id="nav-icon"
                  className="text-white text-3xl md:hidden cursor-pointer"
                />

                {click && (
                  <div className="bg-black md:hidden text-white px-6 py-4 space-y-3 absolute top-[120px] left-0 w-full z-50">
                    <Link to="/" className="block hover:text-[#FFBA00]">Home</Link>
                    <Link to="/about" className="block hover:text-[#FFBA00]">About Us</Link>
                    <Link to="/menu" className="block hover:text-[#FFBA00]">Menu</Link>
                    <Link to="/contact" className="block hover:text-[#FFBA00]">Contact Us</Link>
                    <button className="w-full h-10 bg-[#FFBA00] text-black rounded-sm cursor-pointer mt-2">Shop Online</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center mt-15'>
            <h1 className='text-white font-bold text-[2.5rem] uppercase'>Contact Us</h1>
            <hr className='w-25 border-[#ffba00] border-2 mt-5'/>
            <p className='text-[#c0c0c0] text-center mt-6'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
<main>
  <div className='flex flex-col md:flex-row justify-center mt-20 gap-10 px-4 md:px-0'>
    <div className='flex flex-col md:w-1/2'>
      <h1 className='text-white font-bold uppercase text-3xl md:text-[2.6rem]'>Get closer</h1>
      <hr className='w-20 border-[#ffba00] border-2 mt-5' />
      <p className='text-[#c0c0c0] mt-7 text-sm md:text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus <br className="hidden md:block" /> nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10'>
        <div className='flex gap-4 justify-center'>
          <CiMap className='fill-[#ffba00] text-4xl md:text-[3.3rem]' />
          <div>
            <h2 className='text-white font-bold uppercase text-lg md:text-[1.4rem]'>Location</h2>
            <p className='text-[#c0c0c0] text-sm md:text-base'>Jl. Pantai Kuta No.34, <br /> Badung, Bali</p>
          </div>
        </div>
        <div className='flex gap-4 justify-center items-start'>
          <PiTelegramLogo className='fill-[#ffba00] text-4xl md:text-[3.3rem]' />
          <div>
            <h2 className='text-white font-bold uppercase text-lg md:text-[1.4rem]'>Email</h2>
            <p className='text-[#c0c0c0] text-sm md:text-base'>contact@burgry.com</p>
          </div>
        </div>
        <div className='flex gap-4 justify-center items-start'>
          <LuPhone className='fill-[#ffba00] text-4xl md:text-[3.3rem]' />
          <div>
            <h2 className='text-white font-bold uppercase text-lg md:text-[1.4rem]'>Phone</h2>
            <p className='text-[#c0c0c0] text-sm md:text-base'>+62831-2864-3491</p>
          </div>
        </div>
        <div className='flex gap-4 justify-center items-start'>
          <CiMap className='fill-[#ffba00] text-4xl md:text-[3.3rem]' />
          <div>
            <h2 className='text-white font-bold uppercase text-lg md:text-[1.4rem]'>Open Hour</h2>
            <p className='text-[#c0c0c0] text-sm md:text-base'>10.00 am - 09.00 pm</p>
          </div>
        </div>
      </div>
    </div>

    <div id='contact-div' className='flex flex-col w-full md:w-1/2 max-w-md mt-10 md:mt-0'>
<form className="bg-black text-white p-4 sm:p-6 rounded-md w-full max-w-xl mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold uppercase mb-6">Your Details</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    <div>
      <label className="block font-semibold mb-1 text-sm sm:text-base" htmlFor="firstName">
        First Name <span className="text-[#ffba00]">*</span>
      </label>
      <input
        id="firstName"
        type="text"
        placeholder="Your Name"
        required
        className="w-full p-2.5 sm:p-3 bg-[#1a1a1a] rounded-md placeholder-[#c0c0c0] text-white text-sm sm:text-base focus:outline-none"
      />
    </div>

    <div>
      <label className="block font-semibold mb-1 text-sm sm:text-base" htmlFor="email">
        Email Address <span className="text-[#ffba00]">*</span>
      </label>
      <input
        id="email"
        type="email"
        placeholder="email@yourmail.com"
        required
        className="w-full p-2.5 sm:p-3 bg-[#1a1a1a] rounded-md placeholder-[#c0c0c0] text-white text-sm sm:text-base focus:outline-none"
      />
    </div>
  </div>

  <div className="mt-5">
    <label className="block font-semibold mb-1 text-sm sm:text-base" htmlFor="subject">
      Subject <span className="text-[#ffba00]">*</span>
    </label>
    <input
      id="subject"
      type="text"
      placeholder="Subject"
      required
      className="w-full p-2.5 sm:p-3 bg-[#1a1a1a] rounded-md placeholder-[#c0c0c0] text-white text-sm sm:text-base focus:outline-none"
    />
  </div>

  <div className="mt-5">
    <label className="block font-semibold mb-1 text-sm sm:text-base" htmlFor="message">
      Comments / Questions <span className="text-[#ffba00]">*</span>
    </label>
    <textarea
      id="message"
      placeholder="Your Message"
      rows="4"
      required
      className="w-full p-2.5 sm:p-3 bg-[#1a1a1a] rounded-md placeholder-[#c0c0c0] text-white text-sm sm:text-base focus:outline-none resize-none"
    />
  </div>

  <button
    type="submit" className="bg-[#ffba00] text-black font-bold py-3 px-6 cursor-pointer mt-6 rounded-md hover:opacity-90 w-full sm:w-auto"
  >
    Submit Message
  </button>
</form>
    </div>
  </div>
  </main>
<div className="w-full max-w-4xl mx-auto mt-20 px-4">
  <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <iframe className="w-full h-[300px] sm:h-[400px] md:h-[500px]" loading="lazy" src="https://maps.google.com/maps?q=jalan%20pantai%20kuta&t=m&z=16&output=embed&iwloc=near" 
    title="jalan pantai kuta"
      aria-label="jalan pantai kuta"
      allowFullScreen
    ></iframe>
    </div>
    </div>
        <div className="w-full bg-[#ffba00] mt-40 py-10 px-6">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h1 className="font-black uppercase text-2xl sm:text-3xl lg:text-4xl mb-2">Get Exclusive Update</h1>
                  <p className="text-white text-base sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div id="inp-div" className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                    <input type="text" placeholder="Email" className="bg-white w-full sm:w-[300px] md:w-[350px] placeholder:text-[#5a5a5a] lg:w-[400px] rounded-lg p-4 h-[55px] text-[#7a7a7a]"/>
                    <button className="bg-black text-white rounded-lg cursor-pointer h-[55px] w-full sm:w-[180px] flex items-center justify-center gap-2 px-4">
                      <BiLogoTelegram className="text-2xl" />
                      <span>Subscribe Now</span>
                      </button>
                      </div>
                    </div>
                  </div>
                  <footer className="w-full bg-black text-white px-6 py-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                      <div>
                        <img src="/logo.png" className="w-36 h-10" alt="logo" />
                        <p className="mt-6 text-[1rem] leading-relaxed">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                          </p>
                        </div>
                      <div>
                        <h2 className="uppercase font-bold text-[1.2rem] mb-4">Support</h2>
                        <ul className="space-y-2 text-sm">
                          <li className="hover:text-[#ffba00] cursor-pointer">FAQ's</li>
                          <li className="hover:text-[#ffba00] cursor-pointer">Privacy Policy</li>
                          <li className="hover:text-[#ffba00] cursor-pointer">Terms & Conditions</li>
                          <li className="hover:text-[#ffba00] cursor-pointer">Contact</li>
                          </ul>
                        </div>
                      <div>
                        <h2 className="font-bold text-[1.2rem] mb-4">Contact</h2>
                        <div className="flex items-center gap-2 mb-3">
                          <FiPhone className="text-[#ffba00] text-xl" />
                          <p className="hover:text-[#ffba00] text-sm cursor-pointer">+62831-2864-349-1</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <MdOutlineEmail className="text-[#ffba00] text-xl" />
                            <p className="hover:text-[#ffba00] text-sm cursor-pointer">contact@burgry.com</p></div>
                            </div>
                            <div>
                              <h2 className="font-bold text-[1.2rem] mb-4">Address</h2>
                              <div className="flex items-start gap-2 text-sm mb-6">
                                <CiLocationOn className="text-[#ffba00] text-2xl mt-[2px]" />
                                <p className="hover:text-[#ffba00]">Jl. Pantai Kuta No. 34, Badung, Bali.</p>
                                </div>
                                <h2 className="font-bold text-[1.2rem] mb-2">Follow Us</h2>
                                <div className="flex gap-4 justify-center text-[#ffba00] text-lg">
                            <FaFacebookF className="hover:scale-125 transition" />
                            <FaTwitter className="hover:scale-125 transition" />
                            <FaInstagram className="hover:scale-125 transition" />
                            <FaTripadvisor className="hover:scale-125 transition" />
                          </div>
                          </div>  
                         </div>
                         <hr className="my-10 border-gray-700" />
                         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-2 px-2">
                          <p>Burger Template Kit by Nika Chavleishvili</p>
                          <p>Copyright © 2025. All rights reserved</p>
                          </div>
                          </footer> 
    </>
  );
};

export default Contact;
