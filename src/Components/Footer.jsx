import React from 'react'
import FooterImg1 from '/Images/Footer/Footer-1.png';
import FooterImg2 from '/Images/Footer/Footer-2.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-[#162149] py-5 lg:p-[2rem] font-header'>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center mx-4 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <div className="mb-4 md:mb-0">
                            <div className="text-2xl font-bold">
                                <p className='font-normal text-[34.14] font-logo'>
                                    <span className="text-[#FF0052]">JACKPOT</span>
                                    <span className="ml-2">ONLINE</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 lg:mb-0 mb-4">
                            <div>
                                <img src={FooterImg2} alt="" className='w-[42.9px] lg:w-[61.29px] h-[28px] lg:h-[40px]' />
                            </div>
                            <div>
                                <img src={FooterImg1} alt="" className='w-[67.2px] lg:w-[96px] h-[28px] lg:h-[40px]' />
                            </div>
                        </div>
                        <div>
                            <ul className='flex lg:gap-0 gap-5 md:space-y-0 md:space-x-9'>
                                <li className='text-[13px] cursor-pointer'>About Us</li>
                                <li className='text-[13px] cursor-pointer'>Discover</li>
                                <li className='text-[13px] cursor-pointer'>Explore</li>
                                <li className='text-[13px] cursor-pointer'>Blogs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-4">
                    <div className='border-b border-[#A0B8D2] mt-5 mb-6'></div>
                    <div className="flex justify-center flex-col text-center lg:flex-row lg:justify-between">
                        <div className="mb-4 md:mb-0">
                            <p className='font-normal text-[12px] lg:text-[14px] text-[#A0B8D2]'>© 2023 Jackpot Online. All rights reserved.</p>
                        </div>
                        <div>
                            <ul className='flex justify-center space-x-4 md:space-x-8'>
                                <li><FaFacebook className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white cursor-pointer' /></li>
                                <li><FaTwitter className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white cursor-pointer' /></li>
                                <li><FaVimeoV className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white cursor-pointer' /></li>
                                <li><FaYoutube className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white cursor-pointer' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer