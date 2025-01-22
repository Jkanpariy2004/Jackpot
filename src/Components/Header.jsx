import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="fixed top-0 w-full bg-[#162149] text-white z-50">
            <div className="container mx-auto flex justify-between items-center h-[68px] lg:h-[100px]">
                <div className="text-2xl font-bold">
                    <p className='font-normal text-[20px] font-logo sm:text-[20px] md:text-[35px]'>
                        <span className="text-[#FF0052]">JACKPOT</span>
                        <span className="ml-2">ONLINE</span>
                    </p>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6">
                        <li className="text-[#FF0052] cursor-pointer">
                            Section 1
                            <img src="/Images/Header-border.png" alt="" className='w-[67px]' />
                        </li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">Section 2</li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">Section 3</li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">About Us</li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">Lotterie</li>
                    </ul>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 6.75H20.25M6.75 12H20.25M10.75 17.25H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center bg-[#162149] py-4 space-y-4">
                    <li className="text-[#FF0052] cursor-pointer">
                        Section 1
                        <img src="/Images/Header-border.png" alt="" className='w-[67px]' />
                    </li>
                    <li className="hover:text-[#FF0052] cursor-pointer font-logo">Section 2</li>
                    <li className="hover:text-[#FF0052] cursor-pointer font-logo">Section 3</li>
                    <li className="hover:text-[#FF0052] cursor-pointer font-logo">About Us</li>
                    <li className="hover:text-[#FF0052] cursor-pointer font-logo">Lotterie</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
