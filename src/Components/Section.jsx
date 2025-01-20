import React from 'react';
import section from '../../public/Images/Section/Section.png';
import section1 from '../../public/Images/Game-Section/Game-Section-1.png'
import section2 from '../../public/Images/Game-Section/Game-Section-2.png'
import section3 from '../../public/Images/Game-Section/Game-Section-3.png'

function Section() {
    return (
        <div className="w-[100%] h-[490px] relative">
            <img src={section} alt="" className='w-[100%] h-[530px] absolute' />
            <div className="w-[100%] h-[530px] absolute bg-[#061651] opacity-[90%]"></div>
            <div className="absolute w-[100%] h-[100%]">
                <div className='w-100 text-center'>
                    <h1 className='text-white image-text font-normal text-[36px] w-[292px] mt-[40px] mx-auto border-b-2 border-[#FF0052]'>MINI - Game Section</h1>
                </div>
                <div className='lg:flex justify-center'>
                    <div className='font-header'>
                        <p className='lg:text-left text-center text-white font-normal text-[24px] mt-[30px] mb-[20px]'>Try our mini -games for free and find out your favorites</p>
                        <div className="flex flex-col lg:flex-row justify-center">
                            <div className='w-[20%] mr-5'>
                                <img src={section1} className='w-[300px] h-[290px]' alt="" />
                            </div>
                            <div className='w-[20%] mr-5 relative'>
                                <img src={section2} className='w-[300px] h-[290px]' alt="" />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg m-3'>
                                    <div className='text-center'>
                                        <p className='text-white text-[26px] mb-3'>777 Slots</p>
                                        <button className='bg-[#FF0052] w-[155px] h-[46px] rounded-lg'>
                                            <p className='font-normal text-[18px] text-white'>Play Now</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[20%] mr-5'>
                                <img src={section3} className='w-[300px] h-[290px]' alt="" />
                            </div>
                            <div className='w-[40%] text-center '>
                                <div className='w-[500px] h-[290px] bg-[#FF0052] rounded-lg p-[20px] text-white'>
                                    <p className='font-medium text-[28px]'>Don’t Know where to <br /> start ?</p>
                                    <button className='mt-[40px] w-[210px] h-[48px] bg-white rounded-lg'><p className='text-[#FF0052] font-normal text-[18px]'>Choose For me</p></button>
                                    <p className='mt-[40px] text-[18px] text-white'>May be brly Fortune can decide for you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;