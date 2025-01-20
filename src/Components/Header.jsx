import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-[#162149] text-white">
            <div className="container mx-auto flex justify-between items-center h-[100px] px-4">
                <div className="text-2xl font-bold">
                    <p className='font-normal text-[41px] font-logo sm:text-[28px] md:text-[41px]'>
                        <span className="text-[#FF0052]">JACKPOT</span>
                        <span className="ml-2">ONLINE</span>
                    </p>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6">
                        <li className="text-[#FF0052] cursor-pointer border-b-2 border-[#FF0052]">Section 1</li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">Section 2</li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">Section 3</li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">About Us</li>
                        <li className="hover:text-[#FF0052] cursor-pointer font-logo">Lotterie</li>
                    </ul>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center bg-[#162149] py-4 space-y-4">
                    <li className="text-[#FF0052] cursor-pointer">Section 1</li>
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
