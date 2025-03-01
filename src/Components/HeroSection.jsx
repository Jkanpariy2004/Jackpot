import React from 'react'
import HeroImage from "/Images/Hero-Section.png";
import Roulette from "/Images/Roulette.png";
import Slot from "/Images/Slot.png";
import Poker from "/Images/Poker.png";
import Super from "/Images/super.png";
import Lotteria from "/Images/lotteria.png";
import Tombola from "/Images/tombola.png";
import Vinc from "/Images/vinc.png";

function HeroSection() {
  return (
    <div className='mt-[4.2rem] lg:mt-[6.2rem]'>
      <img src={HeroImage} alt="" className="w-full h-[440px] object-cover lg:object-fill lg:h-[510px] absolute" />
      <div className="flex flex-wrap lg:flex-nowrap relative">
        <div className="hero-1 w-full lg:w-[80%]">
          <div className="relative">
            <div className="pt-[5rem] lg:pt-[7rem] pl-4 lg:pl-[7rem]">
              <h1 className="text-[#FFEA30] text-[25px] lg:text-[60px] font-medium image-text">Welcome to <br /> Online Casino</h1>
              <p className="text-[#FFFFFF] uppercase font-normal text-[20px] lg:text-[28px] image-text">Genuine Money Transection</p>
            </div>
            <div className="hero-3 lg:w-[20%] ml-3 mt-[1rem] lg:hidden">
              <div className="flex flex-wrap justify-start gap-2">
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">1</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">2</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">3</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">4</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">5</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">6</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-start gap-2">
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">7</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">8</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">9</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">10</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">11</p>
                </div>
                <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
                  <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">12</p>
                </div>
              </div>
            </div>
            <div className='block lg:flex mt-[1rem] lg:mt-[4.4rem]'>
              <div className="bg-[#232D6A] rounded-xl h-[54px] lg:h-[90px] relative mx-3 flex items-center w-[335px] lg:w-[820px]">
                <div className="flex flex-wrap justify-center items-center mx-2 lg:mx-1 my-2 container">
                  <div className="w-[60%] flex flex-row items-center justify-center">
                    <div className='flex flex-col items-center justify-center mx-2'>
                      <img src={Roulette} alt="" className='lg:w-[40px] lg:h-[40px] h-[20px] w-[20px]' />
                      <p className='font-normal text-[12px] lg:text-[14px] text-white font-header'>Roulette</p>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-2 lg:mx-5'>
                      <img src={Slot} alt="" className='lg:w-[40px] lg:h-[40px] h-[20px] w-[20px]' />
                      <p className='font-normal text-[12px] lg:text-[14px] text-white font-header'>Slot</p>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-2 lg:mx-5'>
                      <img src={Poker} alt="" className='lg:w-[40px] lg:h-[40px] h-[20px] w-[20px]' />
                      <p className='font-normal text-[12px] lg:text-[14px] text-white font-header'>Poker</p>
                    </div>
                  </div>
                  <div className="w-[40%] flex flex-col items-center justify-center">
                    <button className='w-[95px] lg:w-[170px] h-[27px] lg:h-[46px] rounded-sm lg:rounded-lg bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300'>
                      <p className='font-header font-normal text-[12px] lg:text-[18px] text-white'>Discover now</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#232D6A] rounded-xl h-[54px] lg:h-[90px] relative mx-3 flex items-center w-[335px] lg:w-[820px] lg:mt-0 mt-3">
                <div className="flex flex-wrap justify-center items-center mx-8 my-2 h-[100px] w-full">
                  <div className="w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Vinc} alt="" className='lg:w-[58px] w-[38px] h-[32.93px] lg:h-[50px]' />
                  </div>
                  <div className="w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Super} alt="" className='lg:w-[106px] w-[73.66px] h-[31.27px] lg:h-[45px]' />
                  </div>
                  <div className="w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Tombola} alt="" className='lg:w-[142px] w-[98.68px] h-[21.54px] lg:h-[31px]' />
                  </div>
                  <div className="w-[25%] flex flex-col items-center justify-center cursor-pointer">
                    <img src={Lotteria} alt="" className='lg:w-[90px] w-[62.54px] h-[31.27px] lg:h-[45px]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-3 w-full hidden lg:block lg:w-[20%]">
          <div className="flex flex-wrap justify-end cursor-pointer gap-2">
            <div className="lg:h-[73px] h-[27px] w-[40px]  lg:w-[106px] box font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">1</p>
            </div>
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">2</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer gap-2">
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">3</p>
            </div>
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">4</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer gap-2">
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">5</p>
            </div>
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">6</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer gap-2">
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">7</p>
            </div>
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">8</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer gap-2">
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">9</p>
            </div>
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">10</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-end cursor-pointer gap-2">
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">11</p>
            </div>
            <div className="lg:h-[73px] h-[27px] w-[40px] lg:w-[106px] box-red font-[45px] mt-2">
              <p className="text-white font-medium text-[18px] lg:text-[45px] font-header">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
