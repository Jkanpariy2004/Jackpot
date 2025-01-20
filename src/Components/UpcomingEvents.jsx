import React from 'react'
import section from '../../public/Images/Section/Section.png';
import Upcoming1 from '../../public/Images/Upcoming/Upcoming-img-1.png';
import Upcoming2 from '../../public/Images/Upcoming/Upcoming-img-2.png';
import Upcoming3 from '../../public/Images/Upcoming/Upcoming-img-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function UpcomingEvents() {
    return (
        <>
            <div className="w-full h-[690px] relative mt-[7rem]">
                <img src={section} alt="" className='w-full h-full object-cover absolute' />
                <div className="w-full h-full absolute bg-[#061651] opacity-[90%]">
                    <div className='w-full mt-[2.5rem]'>
                        <p className='text-white image-text text-[36px] border-b-2 w-[246px] mx-auto border-[#FF0052]'>Upcoming Events</p>
                    </div>
                    {/* Swiper for small and medium screens, and static display for larger screens */}
                    <div className="hidden lg:block">
                        <div className="flex flex-wrap justify-center mt-2">
                            {/* Card 1 */}
                            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative'>
                                <div className='relative'>
                                    <img src={Upcoming1} alt="" className='w-full h-[500px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Estrone lotte</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative'>
                                <div className='relative'>
                                    <img src={Upcoming2} alt="" className='w-full h-[500px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>18</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Super Enalotto</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative'>
                                <div className='relative'>
                                    <img src={Upcoming3} alt="" className='w-full h-[500px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Lotteries</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        {/* Swiper Slider for small and medium screens */}
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
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className='relative mx-3 mt-3'>
                                    <img src={Upcoming1} alt="" className='w-full h-[500px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Estrone lotte</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className='relative mx-3 mt-3'>
                                    <img src={Upcoming2} alt="" className='w-full h-[500px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>18</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Super Enalotto</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] w-[170px] h-[46px] rounded-md mt-2'>
                                                <p className='font-normal text-[18px] text-white'>Discover now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className='relative mx-3 mt-3'>
                                    <img src={Upcoming3} alt="" className='w-full h-[500px]' />
                                    <div className='bg-[#FF0052] w-[48px] h-[60px] flex flex-col font-header text-white text-center absolute top-0 right-0 rounded-tr-[10px] items-center justify-center'>
                                        <p className='text-[18px] font-normal'>Oct</p>
                                        <p className='text-[14px] font-normal'>12</p>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-bl-[10px] rounded-br-[10px]'></div>
                                    <div className='absolute bottom-0 left-0 p-4'>
                                        <div className='font-header'>
                                            <p className='text-[#FFEA30] text-[28px] font-semibold'>Lotteries</p>
                                            <p className='font-normal text-[18px] text-white'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting.</p>
                                            <button className='bg-[#FF0052] w-[170px] h-[46px] rounded-md mt-2'>
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
