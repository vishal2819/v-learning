import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>V-Learning</h1>
            <ul className=' hidden md:flex'>
                <li className='p-3 hover:bg-[#00df9a] hover:rounded-lg'>Home</li>
                <li className='p-3 hover:bg-[#00df9a] hover:rounded-lg'>Products</li>
                <li className='p-3 hover:bg-[#00df9a] hover:rounded-lg'>About</li>
                <li className='p-3 hover:bg-[#00df9a] hover:rounded-lg'>Contact</li>
                <li className='p-3 hover:bg-[#00df9a] hover:rounded-lg'>Resources</li>

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 h-full w-[60%] bg-[#000300] border-r border-r-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>V-Learning</h1>
                <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a] hover:rounded-lg'>Home</li>
                <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a] hover:rounded-lg'>Products</li>
                <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a] hover:rounded-lg'>About</li>
                <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a] hover:rounded-lg'>Contact</li>
                <li className='p-4 hover:bg-[#00df9a] hover:rounded-lg'>Resources</li>
            </ul>
        </div>
    )
}

export default Navbar;