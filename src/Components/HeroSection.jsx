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
      <img src={HeroImage} alt="" className="w-full h-[660px] object-fill lg:h-[510px] absolute" />
      <div className="flex flex-wrap lg:flex-nowrap relative">
        <div className="hero-1 w-full lg:w-[85%]">
          <div className="relative">
            <div className="pt-[5rem] lg:pt-[7rem] pl-4 lg:pl-[7rem]">
              <h1 className="text-[#FFEA30] text-[32px] lg:text-[60px] font-medium image-text">Welcome to <br /> Online Casino</h1>
              <p className="text-[#FFFFFF] uppercase font-normal text-[20px] lg:text-[28px] image-text">Genuine Money Transection</p>
            </div>
            <div className='flex mt-[4.4rem]'>
              <div className="bg-[#232D6A] rounded-xl h-[90px] relative mx-3 flex items-center w-[820px]">
                <div className="flex flex-wrap justify-center items-center mx-5 my-2 w-full container">
                  <div className="w-[60%] flex flex-row items-center">
                    <div className='flex flex-col items-center justify-center mx-5'>
                      <img src={Roulette} alt="" />
                      <p className='font-normal text-[14px] text-white font-header'>Roulette</p>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-5'>
                      <img src={Slot} alt="" />
                      <p className='font-normal text-[14px] text-white font-header'>Slot</p>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-5'>
                      <img src={Poker} alt="" />
                      <p className='font-normal text-[14px] text-white font-header'>Poker</p>
                    </div>
                  </div>
                  <div className="w-[170px] flex flex-col items-center justify-center">
                    <button className='w-[170px] h-[46px] rounded-lg bg-[#FF0052]'>
                      <p className='font-header font-normal text-[18px] text-white'>Discover now</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#232D6A] rounded-xl h-[90px] relative mx-3 flex items-center w-[820px]">
                <div className="flex flex-wrap justify-center items-center mx-8 my-2 w-full h-[100px]">
                  <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Vinc} alt="" className='w-[58px] h-[50px]' />
                  </div>
                  <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Super} alt="" className='w-[106px] h-[45px]' />
                  </div>
                  <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Tombola} alt="" className='w-[142px] h-[31px]' />
                  </div>
                  <div className="w-[40%] sm:w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Lotteria} alt="" className='w-[90px] h-[45px]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-3 w-full hidden lg:block lg:w-[15%]">
          <div className="flex flex-wrap justify-end cursor-pointer">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">1</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">2</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">3</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">4</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">5</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">6</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">7</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">8</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer">
            <div className="h-[73px] w-[106px] box font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">9</p>
            </div>
            <div className="h-[73px] w-[106px] box-red font-[45px] mr-2 mt-2">
              <p className="text-white font-medium text-[45px] font-header">10</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer">
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
