import React, { useEffect, useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { GiWaterDrop } from "react-icons/gi";
import { LuLeaf } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  const [click, setClick] = useState(false);
  const [activeTab, setActiveTab] = useState("food");
  const tabs = [
    { id: "food", label: "Food" },
    { id: "snack", label: "Snack" },
    { id: "beverage", label: "Beverage" },
  ];

  let snackInfo = [
    {image:'meat.png',title:"French Fries",price:'$45.00'},
    {image:'fri.png',title:'French Fries',price:'$45.00'},
    {image:'nuggets.png',title:'Beef Cheese Burger',price:'$45.00'},
    {image:'meat.png',title:'Beef Cheese Burger',price:'$45.00'},
    {image:'taco.png',title:'Beef Cheese Burger',price:'$45.00'},
    {image:'chips.png',title:'Beef Cheese Burger',price:'$45.00'}
  ]
  let beverageInfo = [
    {image:'cola.png',title:'Cola',price:'$45.00'},
    {image:'donut.png',title:'Sweet Doughnut',price:'$45.00'},
    {image:'miniPancake.png',title:'Ice Cream Pancake',price:'$45.00'},
    {image:'pancake.png',title:'Fruit Pancake',price:'$45.00'},
    {image:'drink.png',title:'Sweet Smothie',price:'$45.00'}
  ]

  useEffect(()=>{
      document.body.style.backgroundColor = 'black';
  },[])

  return (
    <>
      <div id="main-specdiv" className="w-full min-w-[320px] bg-cover bg-center">
        <div id="header-div" className="w-full min-h-[120px] relative">
          <div className="flex items-center justify-between px-6 md:px-10 h-[120px]">
            <img src="/logo.png" className="w-[120px] md:w-[140px]" alt="Logo"/>
            <nav className="hidden md:flex text-white gap-8 items-center">
              <a className="text-[#FFBA00] cursor-pointer" to="">Home</a>
              <Link className="cursor-pointer" to="/about">About Us</Link>
              <Link className="cursor-pointer" to="/menu">Menu</Link>
              <Link className="cursor-pointer" to="">Contact Us</Link>
              <button className="w-[130px] h-10 cursor-pointer text-black bg-[#FFBA00] rounded-sm">Shop Online</button>
            </nav>
            <GiHamburgerMenu onClick={() => setClick(prev => !prev)} id="nav-icon" className="text-white text-3xl md:hidden cursor-pointer"/>
            {click && (
              <div className="bg-black md:hidden text-white px-6 py-4 space-y-3 absolute top-[120px] left-0 w-full z-50">
                <a href="#" className="block hover:text-[#ffba00]">Home</a>
                <Link href="#" to="/about" className="block hover:text-[#ffba00]">About Us</Link>
                <Link href="#" to="/menu" className="block hover:text-[#ffba00]">Menu</Link>
                <Link href="#" to="/contact" className="block hover:text-[#ffba00]">Contact Us</Link>
                <button className="w-full h-10 bg-[#FFBA00] text-black rounded-sm cursor-pointer mt-2">Shop Online</button>
              </div>
            )}
          </div>
          
          <div id="main-div" className="flex flex-col md:flex-row items-center md:items-center gap-10 px-6 md:px-25 py-10 md:py-16">
            <img src="/burger.png" className="burger w-[300px] md:w-[500px] transition-transform duration-300 hover:-translate-y-2" alt="Burger Menu"/>

            <div className="text-center md:text-left">
              <h1 className="text-white text-xl md:text-[3rem] font-bold">ENJOY BURGERY MAKE <br /> YOUR TUMMY HAPPY</h1>
              <hr className="border-2 border-[#FFBA00] w-[120px] mt-4 mx-auto md:mx-0" />
              <p className="text-[#7a7a7a] mt-6 leading-relaxed text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula <br />
                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                dis parturient <br />
                montes.
              </p>

              <div id="icons-div" className="flex justify-center md:justify-start gap-12 mt-10">
                <div className="flex flex-col items-center">
                  <CiForkAndKnife className="text-[#FFBA00] text-5xl" />
                  <p className="text-white mt-2">Delicious</p>
                </div>
                <div className="flex flex-col items-center">
                  <GiWaterDrop className="text-5xl fill-transparent stroke-[#FFBA00] stroke-[15px]" />
                  <p className="text-white mt-2">Fresh</p>
                </div>
                <div className="flex flex-col items-center">
                  <LuLeaf className="text-5xl fill-transparent stroke-[#FFBA00] stroke-2" />
                  <p className="text-white mt-2">Organic</p>
                </div>
              </div>

              <button className="w-[130px] h-11 text-black bg-[#FFBA00] cursor-pointer mt-10 rounded-sm">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div className="w-[350px] rounded-md h-[108px] bg-[#ffba00] flex overflow-hidden">
          <div id="food-div" className="w-20 h-24 mt-4"></div> 
          <div className="ml-12">
            <p className="text-white text-[24px] mt-5 font-bold">FOOD</p>
            <p className="text-white text-[0.9rem]">Lorem ipsum dolor sit.</p>
            <p className="text-black font-bold mt-1 cursor-pointer text-[0.9rem]">Buy Online</p>
          </div>
        </div>

        <div className="w-[350px] rounded-md h-[108px] bg-[#007f3f] overflow-hidden flex">
          <div id="food-div2" className="w-20 h-26 mt-4"></div>
          <div className="ml-12">
            <p className="text-white mt-5 text-[24px] font-bold">SNACK</p>
            <p className="text-white text-[0.9rem]">Lorem ipsum dolor sit.</p>
            <p className="text-[#ffba00] font-bold mt-1 cursor-pointer text-[0.9rem]">Buy Online</p>
          </div>
        </div>

        <div className="w-[350px] rounded-md h-[108px] bg-[#cc2e2e] overflow-hidden flex">
          <div id="food-div3" className="w-20 h-30 -ml-2 mt-4"></div>
          <div className="ml-12">
            <p className="text-white mt-5 text-[24px] font-bold">BEVERAGE</p>
            <p className="text-white text-[0.9rem]">Lorem ipsum dolor sit.</p>
            <p className="text-[#ffba00] font-bold mt-1 cursor-pointer text-[0.9rem]">Buy Online</p>
          </div>
        </div>
      </div>

      <div className="flex mt-40 flex-col lg:flex-row flex-wrap justify-center px-4 gap-8">
        <div className="spec-div w-full md:h-[250px] md:w-[500px] bg-[#15181b] rounded-lg flex flex-col-reverse md:flex-row overflow-hidden">
          <div className="text-div p-6 flex flex-col justify-center gap-2 text-center md:text-left">
            <p className="text-[#ffba00] text-sm sm:m-2 sm:ml-1">Payday promo</p>
            <h2 className="title text-white text-lg sm:uppercase sm:text-xl md:text-[1.4rem] leading-5 font-bold">Get a 10% discount on payday week</h2>
            <p className="text text-[#7a7a7a] text-sm">
              Lorem ipsum dolor sit amet,<br className="hidden" />consectetur adipiscing elit.
            </p>
            <p className="text-[#ffba00] font-bold mt-1 cursor-pointer text-[0.9rem]">Buy Online</p>
          </div>
          <div className="flex justify-center items-center p-4">
            <img className="burger w-full max-w-[250px] sm:max-w-[300px] h-auto object-contain" src="/flying-burger-isolated-on-white-background.png" alt="Flying Burger"/>
          </div>
        </div>
        
        <div className="spec-div w-full md:h-[250px] md:w-[500px] bg-[#15181b] rounded-lg flex flex-col-reverse md:flex-row overflow-hidden">
          <div className="text-div p-6 flex flex-col justify-center gap-2 text-center md:text-left">
            <p className="text-[#ffba00] text-sm sm:m-2 sm:ml-1">Payday promo</p>
            <h2 className="title text-white text-lg sm:uppercase sm:text-xl md:text-[1.4rem] leading-5 font-bold">
              Buy 1 Coke Get More <br className="hidden"/> Free 1 Coke
            </h2>
            <p className="text text-[#7a7a7a] text-sm">
              Lorem ipsum dolor sit amet,
              <br className="hidden" />consectetur adipiscing elit.
            </p>
            <p className="text-[#ffba00] font-bold mt-1 cursor-pointer text-[0.9rem]">Buy Online</p>
          </div>
          <div className="flex justify-center items-center p-4">
            <img className="burger w-full max-w-[250px] sm:max-w-[300px] h-auto object-contain" src="/cola.png" alt="Coke"/>
          </div>
        </div>
      </div>

      <div className="spec-div2 flex flex-col md:flex-row mt-40 gap-9 justify-center items-center md:items-start px-4">
        <img src="homemade.jpg" className="w-full lg:max-w-[550px] h-auto rounded-lg object-cover" alt="burger photo"/>
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-white text-[2rem] font-black uppercase leading-8">
            Find Your best tasted food & <br /> drink just in one place
          </h1>
          <hr className="border-2 border-[#ffba00] w-28 mt-5" />
          <p className="text-[#c0c0c0] opacity-[0.80] mt-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br />
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <br />
            parturient montes.
          </p>
          <div id="grid-divs" className="grid mt-8 grid-cols-2 gap-3">
            <div className="flex gap-2">
              <FaCheck className="fill-[#ffba00] mt-1" />
              <p className="text-[#c0c0c0]">Best Price</p>
            </div>
            <div id="service-div" className="flex gap-2 items-start">
              <FaCheck className="fill-[#ffba00] mt-1" />
              <p className="text-[#c0c0c0]">Best Service</p>
            </div>
            <div id="fresh-div" className="flex gap-2 items-start">
              <FaCheck className="fill-[#ffba00] mt-1" />
              <p className="text-[#c0c0c0]">Fresh Ingredient</p>
            </div>
            <div id="health-div" className="flex gap-2 items-start">
              <FaCheck className="fill-[#ffba00] mt-1" />
              <p id="health-p" className="text-[#c0c0c0]">Health Protocol</p>
            </div>
          </div>
          <button className="w-[130px] h-11 text-black bg-[#FFBA00] cursor-pointer mt-10 rounded-sm">
            <p className="mt-1">About Us</p>
          </button>
        </div>
      </div>

      <div className="mt-20 text-center items-center flex flex-col">
        <h1 className="text-white text-[1.8rem] font-black">OUR BEST MENU</h1>
        <hr className="border-2 border-[#ffba00] w-28 mt-5" />
        <p className="text-[#c0c0c0] opacity-[0.8] mt-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa.
        </p>
        <div className="parent-menu flex gap-10 mt-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-[120px] h-[45px] flex items-center justify-center rounded-[10px] cursor-pointer transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#ffba00] text-black"
                : "bg-[#171717] text-white hover:bg-[#ffba00] hover:text-black"
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      </div>

<div className="flex justify-center px-4">
  <div className="grid mt-10 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {activeTab === 'food' && (
      [
        { name: "Black Beef Burger", img: "burger1.png", price: "$42.00" },
        { name: "Big Meety", img: "burger2.png", price: "$45.00" },
        { name: "Chicken Burger", img: "burger3.png", price: "$15.00" },
        { name: "Double Mac Burger", img: "burger4.png", price: "$20.00" },
        { name: "Beef Cheese Burger", img: "burger5.png", price: "$45.00" },
        { name: "Big Meety", img: "burger6.png", price: "$35.00" },
        { name: "Crispy Chicken", img: "burger7.png", price: "$45.00" },
        { name: "Regular Beef Burger", img: "burger8.png", price: "$25.00" },
      ].map((burger, index) => (
        <div key={index} className="flex flex-col items-center text-center w-[250px] mx-auto">
          <div className="burger-divs bg-[#1c1c1c] rounded-2xl p-6 mb-4 w-full flex justify-center items-center h-[180px]">
            <img src={burger.img} alt={burger.name} className="spec-img w-[130px] h-auto" />
          </div>
          <h3 className="text-white text-md font-extrabold uppercase">{burger.name}</h3>
          <p className="text-gray-400 text-[0.9rem] mt-1">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
          <p className="text-yellow-400 font-bold text-md mt-2">{burger.price}</p>
          <button className="mt-3 bg-yellow-400 cursor-pointer text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
            Add to Cart
          </button>
        </div>
          ))
          )}
          </div>
          </div>
          <div className="flex justify-center px-4">
            <div className="grid mt-10 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeTab === 'snack'&& (
            snackInfo.map((el,index)=>(
              <div key={index} className="flex flex-col items-center text-center w-[250px] mx-auto">
                <div className="burger-divs bg-[#1c1c1c] rounded-2xl p-6 mb-4 w-full flex justify-center items-center h-[180px]">
                  <img src={el.image} alt={el.title} className="spec-img w-[130px] h-auto" />
                  </div>
                  <h3 className="text-white text-md font-extrabold uppercase">{el.title}</h3>
                  <p className="text-gray-400 text-[0.9rem] mt-1">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                    </p>
                    <p className="text-yellow-400 font-bold text-md mt-2">{el.price}</p>
                    <button className="mt-3 bg-yellow-400 cursor-pointer text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
                      Add to Cart
                      </button>
                      </div>
                      ))
                      )}
                      </div>
                      </div>

                      <div className="flex justify-center px-4">
                        <div className="grid mt-10 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {activeTab === 'beverage' && (
                        beverageInfo.map((el,index)=>(
                          <div key={index} className="flex flex-col items-center text-center w-[250px] mx-auto">
                            <div className="burger-divs bg-[#1c1c1c] rounded-2xl p-6 mb-4 w-full flex justify-center items-center h-[180px]">
                              <img src={el.image} alt={el.title} className="spec-img w-[130px] h-auto" />
                              </div>
                              <h3 className="text-white text-md font-extrabold uppercase">{el.title}</h3>
                              <p className="text-gray-400 text-[0.9rem] mt-1">
                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                                </p>
                                <p className="text-yellow-400 font-bold text-md mt-2">{el.price}</p>
                                <button className="mt-3 bg-yellow-400 cursor-pointer text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
                                  Add to Cart
                                  </button>
                               </div>                            
                        ))
                      )}
                    </div>
                  </div>
      <div className="relative w-full h-[90vh] mt-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div className="w-20 h-20 sm:w-16 sm:h-16 bg-[#ffba00] rounded-full flex items-center justify-center">
            <FaPlay className="text-white md:text-4xl text-4xl sm:text-2xl ml-1" />
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

      <div className="flex flex-col lg:flex-row justify-center mt-10 gap-10 px-4">
        <img id="phone-img" className="burger w-full md:w-[400px] h-auto p-4" src="/food-clay.jpg" alt="burger" />
        <div className="flex flex-col mt-10 lg:mt-[100px]">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-[2.2rem] font-black leading-8 text-center lg:text-left">
            Don't worry! You can order <br /> your food just by phone
          </h1>
          <hr className="border-2 border-[#ffba00] w-[80px] mt-5 mx-auto lg:mx-0" />
          <p className="text-[#c0c0c0] mt-6 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br className="hidden lg:block" />
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <br className="hidden lg:block" />
            parturient montes.
          </p>
          <div className="flex flex-col mt-8 gap-5">
            <div className="w-full lg:w-[400px] h-[110px] rounded-lg flex bg-[#1c1c1c]">
              <div className="w-[65px] h-[65px] rounded-lg flex justify-center items-center m-5 bg-[#ffba00]">
                <CiDeliveryTruck className="fill-white text-5xl hover:fill-gray-400 transition duration-[350ms]" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-white text-[1.5rem] font-bold">Free Delivery</h2>
                <p className="text-[#c0c0c0]">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>  
            <div className="w-full lg:w-[400px] h-[110px] rounded-lg flex bg-[#1c1c1c]">
              <div className="w-[65px] h-[65px] rounded-lg flex justify-center items-center m-5 bg-[#ffba00]">
                <FaRegMoneyBillAlt className="fill-white text-[2.7rem] hover:fill-gray-400 transition duration-[350ms]" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-white text-[1.5rem] font-bold">Special Promo</h2>
                <p className="text-[#c0c0c0]">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start mt-10 gap-5">
            <img src="apple.png" className="app w-[130px] sm:w-[150px] cursor-pointer" alt="apple" />
            <img src="google-play.png" className="app w-[130px] sm:w-[150px] cursor-pointer" alt="google play" />
          </div>
        </div>
      </div>

      <div className="w-full min-h-[600px] bg-[#171717] mt-40 text-center py-20">
        <h1 className="text-white text-[2.5rem] font-bold">Customer Review</h1>
        <hr className="border-2 border-[#ffba00] w-[120px] mt-5 mx-auto" />
        <p className="text-[#c0c0c0] mt-7 px-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br className="hidden md:block" /> ligula eget dolor. Aenean massa.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-7 mt-10 px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-black rounded-lg p-5 w-full md:w-[360px] text-left relative">
              <p className="text-[#c0c0c0] mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="flex items-center gap-4">
                <img src={`john${i}.jpg`} alt="john doe" className="w-[50px] h-[50px] rounded-full" />
                <div>
                  <h4 className="text-white font-bold uppercase">John Doe</h4>
                  <p className="text-[#c0c0c0] text-sm">Designation</p>
                </div>
              </div>
              <FaQuoteRight className="fill-[#ffba00] text-[2.5rem] absolute bottom-5 right-5" />
            </div>
          ))}
        </div>
      </div>

      <div id="bg-image" className="relative">
        <div className="w-full h-[500px] absolute bg-black/50 flex items-center">
          <div className="px-4 md:px-20 max-w-5xl">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl leading-snug uppercase font-bold mb-4">
              Get a special offer for your <br /> special occasion
            </h1>
            <hr className="w-24 border-2 mb-4 border-[#ffba00]" />
            <p className="text-[#c0c0c0] text-sm md:text-base mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br />
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis <br />
              dis parturient montes.
            </p>
            <button className="px-5 py-3 bg-[#ffba00] text-black font-semibold rounded hover:bg-yellow-400 transition">
              Book a Reservation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center mt-10 items-center px-4">
        <h1 className="text-white text-2xl md:text-4xl leading-10 uppercase font-bold">
          our news & article
        </h1>
        <hr className="w-24 border-2 mb-4 border-[#ffba00] mt-5" />
        <p className="text-[#c0c0c0] mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br className="hidden md:block" />
          ligula eget dolor. Aenean massa.
        </p>
        <div id="juicyburger-div" className="flex flex-col lg:flex-row justify-center gap-10 mt-10 w-full max-w-7xl">
          <div className="flex flex-col text-start w-full max-w-[400px]">
            <div id="juicy-burger" className="w-full h-[270px] bg-gray-700"></div>
            <h3 className="text-white font-bold uppercase mt-2 text-[1.1rem] leading-6">
              Look How we make beef meat <br /> tasty with this technique
            </h3>
            <p className="text-[#c0c0c0] opacity-80 mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetuer <br />
              adipiscing elit. Aenean commodo ligula eget dolor. <br />
              Aenean massa.
            </p>
            <div className="flex items-center">
              <a href="#" className="text-[#ffba00] mt-2">Read more</a>
              <FaArrowRight className="fill-[#ffba00] ml-2 mt-[13px] text-[0.8rem]" />
            </div>
          </div>
          
          <div className="flex flex-col text-start w-full max-w-[400px]">
            <div id="food" className="w-full h-[270px] bg-gray-700"></div>
            <h3 className="text-white font-bold uppercase mt-2 text-[1.1rem] leading-6">
              Get a 20% Discount at Our Birthday <br /> Event for $20 Spend
            </h3>
            <p className="text-[#c0c0c0] opacity-80 mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetuer <br />
              adipiscing elit. Aenean commodo ligula eget dolor. <br />
              Aenean massa.
            </p>
            <div className="flex items-center">
              <a href="#" className="text-[#ffba00] mt-2">Read more</a>
              <FaArrowRight className="fill-[#ffba00] ml-2 mt-[13px] text-[0.8rem]" />
            </div>
          </div>

          <div className="flex flex-col text-start w-full max-w-[400px]">
            <div id="shake" className="w-full h-[270px] bg-gray-700"></div>
            <h3 className="text-white font-bold uppercase mt-2 text-[1.1rem] leading-6">
              Strawberry Smoothie is The Best <br /> Beverage for Your Hot Day
            </h3>
            <p className="text-[#c0c0c0] opacity-80 mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetuer <br />
              adipiscing elit. Aenean commodo ligula eget dolor. <br />
              Aenean massa.
            </p>
            <div className="flex items-center">
              <a href="#" className="text-[#ffba00] mt-2">Read more</a>
              <FaArrowRight className="fill-[#ffba00] ml-2 mt-[13px] text-[0.8rem]" />
            </div>
          </div>
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

export default Home;