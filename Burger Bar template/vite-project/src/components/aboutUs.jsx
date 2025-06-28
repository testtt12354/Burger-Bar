import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SlBadge } from "react-icons/sl";
import { GiHamburger } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

import './About.css';

const AboutUs = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);

  return (
    <>
      <div id='header-bg' className='w-full h-[400px]'>
        <div className='w-full h-[400px] bg-black/70'>
          <div className="w-full min-w-[320px] bg-cover bg-center">
            <div id="header-div" className="w-full min-h-[120px] relative">
              <div className="flex items-center justify-between px-6 md:px-10 h-[120px]">
                <img src="/logo.png" className="w-[120px] md:w-[140px]" alt="Logo" />
                <nav className="hidden md:flex text-white gap-8 items-center">
                  <Link className="cursor-pointer" to="/">Home</Link>
                  <Link className="text-[#FFBA00] cursor-pointer" to="/about">About Us</Link>
                  <Link className="cursor-pointer" to="/menu">Menu</Link>
                  <Link className="cursor-pointer" to="/contact">Contact Us</Link>
                  <button className="w-[140px] h-12 cursor-pointer text-black bg-[#FFBA00] rounded-sm">Shop Online</button>
                </nav>
                <GiHamburgerMenu onClick={() => setClick(prev => !prev)} id="nav-icon" className="text-white text-3xl md:hidden cursor-pointer" />
                {click && (
                  <div className="bg-black md:hidden text-white px-6 py-4 space-y-3 absolute top-[120px] left-0 w-full z-50">
                    <Link to="/" className="block hover:text-[#ffba00]">Home</Link>
                    <Link to="/about" className="block hover:text-[#ffba00]">About Us</Link>
                    <Link to="/menu" className="block hover:text-[#ffba00]">Menu</Link>
                    <Link to="/contact" className="block hover:text-[#ffba00]">Contact Us</Link>
                    <button className="w-full h-10 bg-[#FFBA00] text-black rounded-sm cursor-pointer mt-2">Shop Online</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center mt-15'>
            <h1 className='text-white font-bold text-[2.5rem] uppercase'>About Us</h1>
            <hr className='w-25 border-[#ffba00] border-2 mt-4'/>
            <p className='text-[#c0c0c0] text-center mt-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa.</p>
          </div>
        </div>
      </div>
      <main>
        <div className="flex flex-col lg:flex-row mt-10 px-4 lg:px-20 justify-center gap-8">
            <img src="homemade.jpg" className="w-full lg:max-w-[550px] h-auto rounded-lg object-cover" alt="burger img" />
            <div className="flex flex-col">
                <h1 className="text-white text-[2rem] lg:text-[2.5rem] leading-tight font-bold uppercase">Good food For your all day <br className="hidden lg:block" /> good mood</h1>
                <hr className="border-2 w-[100px] mt-5 border-[#ffba00]" />
                <p className="text-[#c0c0c0] mt-6 text-sm lg:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br className="hidden lg:block" /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus <br className="hidden lg:block" /> et magnis dis parturient montes, nascetur ridiculus mus. Donec quam <br className="hidden lg:block" /> felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat <br className="hidden lg:block" /> massa quis enim.</p>
                <img src="signature.png" className="w-60 mt-8" alt="signature" />
                <p className="text-white text-[1.1rem] mt-2 font-bold">George Shaw, CEO</p>
                </div>
                </div>
                <div className='flex justify-center gap-7 mt-30 flex-wrap'>
                    <div className='w-[420px] h-[175px] rounded-lg flex justify-center flex-col items-center bg-[#171717]'>
                        <SlBadge className='fill-[#ffba00] text-6xl mt-6'/>
                        <h2 className='text-white font-bold text-[2.2rem] mt-2'>15</h2>
                        <p className='text-[#c0c0c0]'>Year Experience</p>
                        </div>
            <div className='w-[420px] h-[175px] rounded-lg bg-[#171717] flex justify-center flex-col items-center'>
                <GiHamburger className='fill-[#ffba00] text-6xl mt-6'/>
                <h2 className='text-white font-bold text-[2.2rem] mt-2'>90</h2>
                <p className='text-[#c0c0c0]'>Menu Variant</p>
            </div>
            <div className='w-[420px] h-[175px] rounded-lg bg-[#171717] flex justify-center flex-col items-center'>
                <IoStorefrontOutline className='stroke-[#ffba00] text-6xl mt-6'/>
                <h2 className='text-white font-bold text-[2.2rem] mt-2'>24</h2>
                <p className='text-[#c0c0c0]'>Restaurant Branch</p>
            </div>
        </div>
        <div className="relative w-full h-[90vh] mt-30">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/vid.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-20 h-20 sm:w-16 sm:h-16 bg-[#ffba00] rounded-full flex items-center justify-center">
                    <FaPlay className="text-white md:text-3xl text-4xl sm:text-2xl ml-1" />
                  </div>
                  <h2 className="text-white md:text-5xl mt-6 text-4xl sm:text-2xl font-black tracking-tight">
                    we serve you the best
                  </h2>
                  <div className="border-[#ffba00] border-2 w-28 sm:w-20 mt-8" />
                  <p className="text-[#c0c0c0] mt-5 md:text-[1rem] text-lg sm:text-sm max-w-[90%] sm:max-w-[95%] md:max-w-[600px] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br className="hidden sm:block"/> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <br className="hidden sm:block"/> parturient montes.
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center'>
              <div className='uppercase text-white font-bold text-[2.5rem] mt-20'>Our Best Chef</div>
              <hr className='w-35 border-2 border-[#ffba00] mt-6'/>
              <p className='text-[#c0c0c0] text-center mt-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa.</p>
              </div>
              <div id='chefs-div' className='mt-6 flex flex-wrap justify-center gap-6 px-4'>
                {[{
                    name: "George Shaw",
                    image: "chef1.jpg"
                }, {
                    name: "Callum Rose",
                    image: "chef2.jpg"
                }, {
                    name: "Tine Bauer",
                    image: "chef3.jpg"
                }].map((chef, index) => (
                <div key={index} className="relative group w-full sm:w-[320px] md:w-[360px] lg:w-[400px] p-4">
                    <img src={chef.image} className="w-full rounded-md" alt={chef.name} />
                    <p className="absolute left-6 bottom-5 text-white text-xl sm:text-2xl uppercase font-bold 
                    opacity-0 translate-y-6 transition-all duration-300 
                    group-hover:opacity-100 group-hover:translate-y-0">
                        {chef.name}
                        </p>
                        <div className="absolute bottom-16 right-6
                        opacity-0 translate-x-[40px] transition-all duration-300 
                        group-hover:opacity-100 group-hover:translate-x-0 
                        flex flex-col gap-3 text-[1.5rem] sm:text-[1.7rem]">
                            <FaFacebook className="fill-[#ffba00]" />
                            <AiFillTwitterCircle className="fill-[#ffba00]" />
                            <FaPinterest className="fill-[#ffba00]" />
                            </div>
                            </div>
                        ))}
                        </div>
                        </main>
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
                            <div className="flex gap-4 text-[#ffba00] text-lg">
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
}

export default AboutUs;
