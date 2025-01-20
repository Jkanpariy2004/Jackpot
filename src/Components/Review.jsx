import React from 'react';
import Review1 from '../../public/Images/Review/Review-1.png';
import Review2 from '../../public/Images/Review/Review-2.png';
import Review3 from '../../public/Images/Review/Review-3.png';
import Review4 from '../../public/Images/Review/Review-4.png';
import Review5 from '../../public/Images/Review/Review-5.png';

function Review() {
    return (
        <div className='mx-5'>
            <div className="w-full text-center mt-[6rem]">
                <p className="image-text font-normal text-25px lg:text-[36px] border-b-2 border-[#FF0052] w-[195px] lg:w-[435px] mx-auto">
                    Who we review put to the test
                </p>
            </div>
            <div className="flex justify-center mt-[2rem] flex-wrap md:flex-nowrap">
                <div className="mb-5 md:mb-0 mr-5">
                    <img src={Review1} alt="" className="w-[250px] md:w-[300px]" />
                </div>
                <div className="mb-5 md:mb-0 mr-5">
                    <img src={Review2} alt="" className="w-[250px] md:w-[300px]" />
                </div>
                <div className="mb-5 md:mb-0 mr-5">
                    <img src={Review3} alt="" className="w-[250px] md:w-[300px]" />
                </div>
                <div className="mb-5 md:mb-0 mr-5">
                    <img src={Review4} alt="" className="w-[250px] md:w-[300px]" />
                </div>
                <div className="mb-5 md:mb-0">
                    <img src={Review5} alt="" className="w-[250px] md:w-[300px]" />
                </div>
            </div>
            <div className="w-full text-center mt-[2rem] font-header">
                <button className="bg-[#FF0052] w-[225px] h-[46px] rounded-lg">
                    <p className="text-white font-normal text-[18px]">Ask us a Question</p>
                </button>
            </div>
        </div>
    );
}

export default Review;
