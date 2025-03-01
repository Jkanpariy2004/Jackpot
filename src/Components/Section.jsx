import React from 'react';
import section from '/Images/Section/Section.png';
import section1 from '/Images/Game-Section/Game-Section-1.png';
import section2 from '/Images/Game-Section/Game-Section-2.png';
import section3 from '/Images/Game-Section/Game-Section-3.png';

function Section() {
    return (
        <div className="w-[100%] h-[490px] relative">
            <img src={section} alt="" className='w-[100%] h-[490px] absolute' />
            <div className="w-[100%] h-[490px] absolute bg-[#061651] opacity-[90%]"></div>
            <div className="absolute w-[100%] h-[100%]">
                <div className='lg:block hidden'>
                    <div className='text-center'>
                        <h1 className='text-white image-text font-normal text-[24px] lg:text-[36px] w-[195px] lg:w-[297.87px] sm:w-[292px] mt-[20px] sm:mt-[40px] mx-auto'>
                            MINI - Game Section
                        </h1>
                        <img src="/Images/Slider/Slider-berder.png" className='mx-auto w-[194.88px] lg:w-[297.88px]' alt="" />
                    </div>
                    <div className='lg:flex justify-center container mx-auto'>
                        <div className='font-header'>
                            <p className='lg:text-left text-center text-white font-normal text-[12px] lg:text-[24px] mt-[15px] lg:mt-[30px] mb-[20px]'>Try our mini -games for free and find out your favorites</p>
                            <div className="flex justify-center gap-5">
                                <div className='w-[20%] relative group cursor-pointer'>
                                    <img src={section1} className='w-[230px] h-[260px]' alt="" />
                                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg m-1 opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-10'>
                                        <div className='text-center'>
                                            <p className='text-white text-[26px] mb-3'>Spin</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[155px] h-[46px] rounded-lg'>
                                                <p className='font-normal text-[18px] text-white'>Play Now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[20%] relative group cursor-pointer'>
                                    <img src={section2} className='w-[230px] h-[260px]' alt="" />
                                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg m-1 opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-10'>
                                        <div className='text-center'>
                                            <p className='text-white text-[26px] mb-3'>777 Slots</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[155px] h-[46px] rounded-lg'>
                                                <p className='font-normal text-[18px] text-white'>Play Now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[20%] relative group cursor-pointer'>
                                    <img src={section3} className='w-[230px] h-[260px]' alt="" />
                                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg m-1 opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-10'>
                                        <div className='text-center'>
                                            <p className='text-white text-[26px] mb-3'>777 Slots</p>
                                            <button className='bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[155px] h-[46px] rounded-lg'>
                                                <p className='font-normal text-[18px] text-white'>Play Now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[40%] text-center '>
                                    <div className='w-[424px] h-[260px] bg-[#FF0052] rounded-lg p-[20px] text-white'>
                                        <p className='font-medium text-[28px]'>Don’t Know where to <br /> start ?</p>
                                        <button className='mt-[20px] w-[210px] h-[48px] bg-white shadow-[0_5px_7px_#BDBBBC] rounded-lg hover:shadow-none hover:transform hover:scale-95 transition-all duration-300'><p className='text-[#FF0052] font-normal text-[18px]'>Choose For me</p></button>
                                        <p className='mt-[25px] text-[18px] text-white'>May be brly Fortune can decide for you</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden block'>
                    <div className='text-center'>
                        <h1 className='text-white image-text font-normal text-[24px] lg:text-[36px] w-[195px] lg:w-[297.87px] sm:w-[292px] mt-[20px] sm:mt-[40px] mx-auto border-b-2 border-[#FF0052]'>
                            MINI - Game Section
                        </h1>
                    </div>
                    <div className='lg:flex justify-center'>
                        <div className='font-header'>
                            <p className='lg:text-left text-center text-white font-normal text-[12px] lg:text-[24px] mt-[15px] lg:mt-[30px] mb-[20px]'>Try our mini -games for free and find out your favorites</p>
                            <div className="flex mx-3 gap-2 justify-center">
                                <div className="w-[33.33%] relative group">
                                    <img src={section1} className='w-[127.78px] h-[144.44px]' alt="" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-lg m-1 transition-all duration-300 ease-in-out group-hover:bg-opacity-75">
                                        <div className="opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-10 text-center">
                                            <p className="text-white text-[14px] lg:text-[26px] mb-3">Spin</p>
                                            <button className="bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[86px] lg:w-[155px] h-[28px] lg:h-[46px] rounded-sm">
                                                <p className="font-normal text-[12px] lg:text-[18px] text-white">Play Now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[33.33%] relative group">
                                    <img src={section2} className="w-[127.78px] h-[144.44px]" alt="" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-lg m-1 transition-all duration-300 ease-in-out group-hover:bg-opacity-75">
                                        <div className="opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-10 text-center">
                                            <p className="text-white text-[14px] lg:text-[26px] mb-3">777 Slots</p>
                                            <button className="bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[86px] lg:w-[155px] h-[28px] lg:h-[46px] rounded-sm">
                                                <p className="font-normal text-[12px] lg:text-[18px] text-white">Play Now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[33.33%] relative group">
                                    <img src={section3} className='w-[127.78px] h-[144.44px]' alt="" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-lg m-1 transition-all duration-300 ease-in-out group-hover:bg-opacity-75">
                                        <div className="opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-10 text-center">
                                            <p className="text-white text-[14px] lg:text-[26px] mb-3">777 Slots</p>
                                            <button className="bg-[#FF0052] shadow-[0_4px_6px_#B1013A] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300 w-[86px] lg:w-[155px] h-[28px] lg:h-[46px] rounded-sm">
                                                <p className="font-normal text-[12px] lg:text-[18px] text-white">Play Now</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[305px] m-auto h-[169px] bg-[#FF0052] mt-7 rounded-lg p-[20px] text-white text-center'>
                                <p className='font-medium text-[18px]'>Don’t Know where to start ?</p>
                                <br />
                                <button className='w-[120px] h-[28px] bg-white rounded-sm shadow-[0_5px_7px_#BDBBBC] hover:shadow-none hover:transform hover:scale-95 transition-all duration-300'><p className='text-[#FF0052] font-normal text-[12px]'>Choose For me</p></button>
                                <br /><br />
                                <p className='text-[14px] text-white'>May be brly Fortune can decide for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
