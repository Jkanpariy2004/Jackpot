import React from 'react'
import FooterImg1 from '../../public/Images/Footer/Footer-1.png';
import FooterImg2 from '../../public/Images/Footer/Footer-2.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-[#162149] p-4 md:p-8 lg:p-[2rem] font-header'>
            <div className="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-8 lg:mx-[10rem] text-white">
                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="mb-4 md:mb-0">
                        <div className="text-2xl font-bold">
                            <p className='font-normal text-[24px] md:text-[32px] lg:text-[41px] font-logo'>
                                <span className="text-[#FF0052]">JACKPOT</span>
                                <span className="ml-2">ONLINE</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-4 md:mb-0">
                        <div className='mr-4 md:mr-[2rem]'>
                            <img src={FooterImg2} alt="" />
                        </div>
                        <div>
                            <img src={FooterImg1} alt="" />
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
                            <li>About Us</li>
                            <li>Discover</li>
                            <li>Explore</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-4 md:mx-8 lg:mx-[10rem]">
                <div className='border-b border-[#A0B8D2] mt-5 mb-6'></div>
                <div className="flex justify-center flex-col text-center lg:flex-row lg:justify-between">
                    <div className="mb-4 md:mb-0">
                        <p className='font-normal text-[12px] md:text-[14px] text-[#A0B8D2]'>© 2023 Jackpot Online. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex justify-center space-x-4 md:space-x-8'>
                            <li><FaFacebook className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white' /></li>
                            <li><FaTwitter className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white' /></li>
                            <li><FaVimeoV className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white' /></li>
                            <li><FaYoutube className='w-[20px] md:w-[24px] h-[20px] md:h-[25px] text-white' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer