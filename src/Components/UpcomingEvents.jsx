import React from 'react'
import section from '/Images/Section/Section.png';
import Upcoming1 from '/Images/Upcoming/Upcoming-img-1.png';
import Upcoming2 from '/Images/Upcoming/Upcoming-img-2.png';
import Upcoming3 from '/Images/Upcoming/Upcoming-img-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function UpcomingEvents() {
    return (
        <>
            <div className="w-full h-[650px] relative mt-[7rem]">
                <img src={section} alt="" className='w-full h-full object-cover absolute' />
                <div className="w-full h-full absolute bg-[#061651] opacity-[90%]">
                    <div className='w-full mt-[2.5rem] mb-[1.5rem] text-center'>
                        <p className='text-white image-text text-[24px] md:text-[36px] w-[164.5px] lg:w-[247px] mx-auto'>
                            Upcoming Events
                        </p>
                        <img src="/Images/Slider/Slider-berder.png" className='mx-auto w-[163.88px] lg:h-[3.94px] lg:w-[246.88px]' alt="" />
                    </div>

                    <div className="hidden lg:block">
                        <div className="container m-auto justify-center flex mt-2">

                            <div className='w-[375px] h-[450px] p-2 relative group cursor-pointer'>
                                <div className='relative group-hover:translate-y-[-10px] transition-transform duration-300'>
                                    <img src={Upcoming1} alt="" className='w-full h-[450px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Estrone lotte</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[375px] h-[450px] p-2 relative group cursor-pointer'>
                                <div className='relative group-hover:translate-y-[-10px] transition-transform duration-300'>
                                    <img src={Upcoming2} alt="" className='w-full h-[450px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>18</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Super Enalotto</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[375px] h-[450px] p-2 relative group cursor-pointer'>
                                <div className='relative group-hover:translate-y-[-10px] transition-transform duration-300'>
                                    <img src={Upcoming3} alt="" className='w-full h-[450px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Lotteries</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='relative mx-3 mt-3'>
                                    <img src={Upcoming1} alt="" className='w-full h-[450px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Estrone lotte</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative mx-3 mt-3'>
                                    <img src={Upcoming2} alt="" className='w-full h-[450px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>18</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Super Enalotto</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative mx-3 mt-3'>
                                    <img src={Upcoming3} alt="" className='w-full h-[450px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Lotteries</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingEvents;
