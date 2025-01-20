import React from 'react'
import HeroImage from "../../public/Images/Hero-Section.png";
import Roulette from "../../public/Images/Roulette.png";
import Slot from "../../public/Images/Slot.png";
import Poker from "../../public/Images/Poker.png";
import Super from "../../public/Images/super.png";
import Lotteria from "../../public/Images/lotteria.png";
import Tombola from "../../public/Images/tombola.png";
import Vinc from "../../public/Images/vinc.png";

function HeroSection() {
  return (
    <div>
      <img src={HeroImage} alt="" className="w-full h-[660px] object-fill lg:h-[520px] absolute" />
      <div className="flex flex-wrap lg:flex-nowrap relative">
        <div className="hero-1 w-full lg:w-[40%]">
          <div className="relative">
            <div className="pt-[5rem] lg:pt-[7rem] pl-4 lg:pl-[7rem]">
              <h1 className="text-[#FFEA30] text-[32px] lg:text-[60px] font-medium image-text">Welcome to <br /> Online Casino</h1>
              <p className="text-[#FFFFFF] uppercase font-normal text-[20px] lg:text-[28px] image-text">Genuine Money Transection</p>
            </div>
            <div className="bg-[#232D6A] h-[90px] rounded-xl mt-[4.1rem] mx-3 p-[5px]">
              <div className="flex flex-wrap justify-center items-center">
                <div className="w-[40%] sm:w-[20%] flex flex-col items-center">
                  <img src={Roulette} alt="" />
                  <p className="text-white font-normal font-header mt-1">Roulette</p>
                </div>
                <div className="w-[40%] sm:w-[20%] flex flex-col items-center">
                  <img src={Slot} alt="" />
                  <p className="text-white font-normal font-header mt-1">Slot</p>
                </div>
                <div className="w-[40%] sm:w-[20%] flex flex-col items-center">
                  <img src={Poker} alt="" />
                  <p className="text-white font-normal font-header mt-1">Poker</p>
                </div>
                <div className="w-full sm:w-[40%] flex justify-center items-center mt-4 sm:mt-0">
                  <button className="font-header text-white bg-[#FF0052] w-[170px] h-[46px] rounded-lg">Discover now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-2 w-full lg:w-[40%]">
          <div className="bg-[#232D6A] rounded-xl h-[90px] relative mt-[2rem] mx-3 lg:mt-[25rem] flex items-center">
            <div className="flex flex-wrap justify-center items-center mx-8 my-2 w-full">
              <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center">
                <img src={Vinc} alt="" />
              </div>
              <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center">
                <img src={Super} alt="" />
              </div>
              <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center">
                <img src={Tombola} alt="" />
              </div>
              <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center">
                <img src={Lotteria} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-3 w-full hidden lg:block lg:w-[20%]">
          <div className="flex flex-wrap justify-end">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">1</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">2</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">3</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">4</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">5</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">6</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">7</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">8</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">9</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">10</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">11</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">12</p>
            </div>
          </div>
        </div>
        <div className="hero-3 w-full lg:w-[20%] mx-3 lg:hidden">
          <div className="flex flex-wrap justify-start">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">1</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">2</p>
            </div>
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">3</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">4</p>
            </div>
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">5</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">6</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-start">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">7</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">8</p>
            </div>
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">9</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">10</p>
            </div>
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">11</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
