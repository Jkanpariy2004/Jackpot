import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from "../../public/Images/Slider/slider-1.png";
import slider2 from "../../public/Images/Slider/slider-2.png";
import slider3 from "../../public/Images/Slider/slider-3.png";
import slider4 from "../../public/Images/Slider/slider-4.png";

function Slider() {
    const slides = [
        { img: slider1, title: "Review 1" },
        { img: slider2, title: "Review 2" },
        { img: slider3, title: "Review 3" },
        { img: slider4, title: "Review 4" },
    ];

    return (
        <div className='mt-[6rem] lg:mt-[5rem]'>
            <div className='w-full'>
                <h1 className='text-[24px] sm:text-[25px] md:text-[30px] lg:text-[36px] font-normal image-text border-b-2 w-[302px] lg:w-[462px] border-[#FF0052] mx-auto text-center'>
                    All Tickets and Games Reviews
                </h1>
            </div>
            <div className="container w-full mt-5 mx-auto font-header flex justify-center items-center mb-[9rem] flex-wrap">
                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    loop={true}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full h-auto'>
                                <div className='Slider-image'>
                                    <div className='relative w-full h-[72px]'>
                                        <img src={slide.img} alt={slide.title} className='absolute w-full h-full object-cover rounded-t-[10px]' />
                                        <div className='absolute w-full h-full bg-black opacity-50 rounded-t-[10px]'></div>
                                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-white text-[24px] text-center'>
                                            {slide.title}
                                        </p>
                                    </div>
                                </div>
                                <div className='p-3 border border-[#DFDFE1] rounded-bl-lg rounded-br-lg'>
                                    <div className="flex">
                                        <div className='w-[50%] text-center'>
                                            <p>Pro</p>
                                            <div className='font-light text-[#8A8A8A]'>
                                                <p className='my-1'>1.Lorem ipsum</p>
                                                <p className='my-1'>2.Lorem ipsum</p>
                                                <p className='my-1'>3.Lorem ipsum</p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-400 mx-2"></div>
                                        <div className='w-[50%] text-center'>
                                            <p>Contro</p>
                                            <div className='font-light text-[#8A8A8A]'>
                                                <p className='my-1'>1.Lorem ipsum</p>
                                                <p className='my-1'>2.Lorem ipsum</p>
                                                <p className='my-1'>3.Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <p className='text-center mt-2 border-b-2 w-[74px] border-[#FF0052] mx-auto font-normal text-[18px]'>Best For</p>
                                    </div>
                                    <div className="w-full mt-3">
                                        <p className='text-center font-light text-[#8A8A8A] my-1 text-[14px]'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className="w-full flex justify-center mt-5">
                                        <button className='bg-[#FF0052] text-white rounded-lg w-[155px] h-[48px]'>CTA</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Slider;
