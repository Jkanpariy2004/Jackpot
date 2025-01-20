import React from 'react'
import slider1 from "../../public/Images/Slider/slider-1.png"
import slider2 from "../../public/Images/Slider/slider-2.png"
import slider3 from "../../public/Images/Slider/slider-3.png"
import slider4 from "../../public/Images/Slider/slider-4.png"

function Slider() {
    return (
        <div className='mt-[6rem] lg:mt-[7rem]'>
            <div className='w-full'>
                <h1 className='text-[25px] lg:text-[36px] font-normal image-text border-b-2 w-[315px] lg:w-[462px] border-[#FF0052] mx-auto'>All Tickets and Games Reviews</h1>
            </div>
            <div className="w-full mt-5 font-header flex justify-center items-center mb-[9rem] flex-wrap">
                <div className='w-full sm:w-[270px] h-[391px] mx-3 mb-5 sm:mb-0 mt-3'>
                    <div className='Slider-image'>
                        <div className='relative w-full h-[72px]'>
                            <img src={slider1} alt="" className='absolute w-full h-full' />
                            <div className='absolute w-full h-full bg-black opacity-50 rounded-t-[10px]'></div>
                            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-white text-[24px] text-center'>Review 1</p>
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
                            <p className='text-center font-light text-[#8A8A8A] my-1 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <button className='bg-[#FF0052] text-white rounded-lg w-[155px] h-[48px]'>CTA</button>
                        </div>
                    </div>
                </div>

                {/* Repeat the above block for other sliders */}
                <div className='w-full sm:w-[270px] h-[391px] mx-3 mb-5 sm:mb-0 mt-3'>
                    <div className='Slider-image'>
                        <div className='relative w-full h-[72px]'>
                            <img src={slider2} alt="" className='absolute w-full h-full' />
                            <div className='absolute w-full h-full bg-black opacity-50 rounded-t-[10px]'></div>
                            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-white text-[24px] text-center'>Review 2</p>
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
                            <p className='text-center font-light text-[#8A8A8A] my-1 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <button className='bg-[#FF0052] text-white rounded-lg w-[155px] h-[48px]'>CTA</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[270px] h-[391px] mx-3 mb-5 sm:mb-0 mt-3'>
                    <div className='Slider-image'>
                        <div className='relative w-full h-[72px]'>
                            <img src={slider3} alt="" className='absolute w-full h-full' />
                            <div className='absolute w-full h-full bg-black opacity-50 rounded-t-[10px]'></div>
                            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-white text-[24px] text-center'>Review 3</p>
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
                            <p className='text-center font-light text-[#8A8A8A] my-1 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <button className='bg-[#FF0052] text-white rounded-lg w-[155px] h-[48px]'>CTA</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[270px] h-[391px] mx-3 mb-5 sm:mb-0 mt-3'>
                    <div className='Slider-image'>
                        <div className='relative w-full h-[72px]'>
                            <img src={slider4} alt="" className='absolute w-full h-full' />
                            <div className='absolute w-full h-full bg-black opacity-50 rounded-t-[10px]'></div>
                            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-white text-[24px] text-center'>Review 4</p>
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
                            <p className='text-center font-light text-[#8A8A8A] my-1 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <button className='bg-[#FF0052] text-white rounded-lg w-[155px] h-[48px]'>CTA</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[270px] h-[391px] mx-3 mb-5 sm:mb-0 mt-3'>
                    <div className='Slider-image'>
                        <div className='relative w-full h-[72px]'>
                            <img src={slider1} alt="" className='absolute w-full h-full' />
                            <div className='absolute w-full h-full bg-black opacity-50 rounded-t-[10px]'></div>
                            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-white text-[24px] text-center'>Review 1</p>
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
                            <p className='text-center font-light text-[#8A8A8A] my-1 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <button className='bg-[#FF0052] text-white rounded-lg w-[155px] h-[48px]'>CTA</button>
                        </div>
                    </div>
                </div>

                {/* Repeat this pattern for remaining sliders */}
            </div>
        </div>
    )
}

export default Slider
