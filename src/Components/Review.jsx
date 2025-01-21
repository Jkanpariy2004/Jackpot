import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Review1 from '../../public/Images/Review/Review-1.png';
import Review2 from '../../public/Images/Review/Review-2.png';
import Review3 from '../../public/Images/Review/Review-3.png';
import Review4 from '../../public/Images/Review/Review-4.png';
import Review5 from '../../public/Images/Review/Review-5.png';

function Review() {
    return (
        <div className='mx-5'>
            <div className="w-full text-center mt-[4rem]">
                <p className="image-text font-normal text-[24px] lg:text-[36px] w-[293px] lg:w-[435px] mx-auto">
                    Who we review put to the test
                </p>
                <img src="../../public/Images/Slider/Slider-berder.png" className='mx-auto w-[293.38px] lg:w-[435.88px]' alt="" />
            </div>
            <div className="flex justify-center mt-[2rem] flex-wrap md:flex-nowrap">
                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 5 },
                        640: { slidesPerView: 3, spaceBetween: 10 },
                        768: { slidesPerView: 4, spaceBetween: 15 },
                        1024: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="md:mb-0">
                            <img src={Review1} alt="" className="w-[210px] h-[120px] m-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:mb-0">
                            <img src={Review2} alt="" className="w-[210px] h-[120px] m-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:mb-0">
                            <img src={Review3} alt="" className="w-[210px] h-[120px] m-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:mb-0">
                            <img src={Review4} alt="" className="w-[210px] h-[120px] m-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:mb-0">
                            <img src={Review5} alt="" className="w-[210px] h-[120px] m-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:mb-0">
                            <img src={Review2} alt="" className="w-[210px] h-[120px] m-auto" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full text-center mt-[2rem] font-header">
                <button className="bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[135px] lg:w-[225px] h-[28px] lg:h-[46px] rounded-sm lg:rounded-lg">
                    <p className="text-white font-normal text-[12px] lg:text-[18px]">Ask us a Question</p>
                </button>
            </div>
        </div>
    );
}

export default Review;
