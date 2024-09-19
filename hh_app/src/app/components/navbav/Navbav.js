'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { BsChevronCompactUp } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import SearchBar from './SearchBar'

const Navbav = () => {
    const [showProfile, setShowProfile] = useState(false)  
    const [showNav, setShowNav] = useState(false)
  return (
    <div className='px-5 max-w-[1280px] mx-auto'>
         <div className='flex items-center justify-between py-4 relative'>
                <div className='flex items-center md:space-x-10 lg:space-x-20'>
                    <div className='font-semibold text-2xl'><Link href="/">HH_STORE</Link></div>
                    <nav className='max-md:hidden'>
                        <ul className='flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]'>
                            <li >
                                <Link href='/' className='py-3 inline-block w-full'>Home</Link>
                            </li>

                            <li >
                                <Link href='filters' className='py-3 inline-block w-full'>Sản Phẩm </Link>
                            </li>

                            <li >
                                <Link href='myproducts' className='py-3 inline-block w-full'>Tin tức  </Link>
                            </li>
                            <li >
                                <Link href='myproducts' className='py-3 inline-block w-full'>Liên hệ   </Link>
                            </li>
                        </ul>
                    </nav>


                </div>
                <div className='flex items-center space-x-4'>
                    <SearchBar />
                    <div onClick={() => setShowProfile(!showProfile)}  className='relative cursor-pointer'>
                        <img src='data:image/png;base64,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' className='w-[35px] h-[35px] rounded-full object-cover' alt="" />
                        <div className={`absolute bg-white z-[2] rounded-lg shadow-lg ${showProfile ? "" : "hidden"}`}>
                            <Link href='/login'>SignIn</Link>

                        </div>


                    </div>
                    <Link href="/cart">
                        <div className='p-2 bg-gray-100 rounded-full'>
                            <CiShoppingCart size={20} />
                        </div>
                    </Link>
                    <span onClick={() => setShowNav(!showNav)} className='p-[9px] bg-gray-100 rounded-full md:hidden'>
                        <BsChevronCompactUp className={`transition ease-in duration-150 ${showNav ? "rotate-180" : ""}`}/>
                    </span>
                </div>
            </div>

            <div className={`md:hidden ${showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"}`} >
                <ul className='flex flex-col text-[15px] opacity-75 px-2'>
                    <li> <Link href='/shop' className='py-3 inline-block w-full'>Shop</Link> </li>
                    <li> <Link href='/filters' className='py-3 inline-block w-full'>filters</Link> </li>
                    <li> <Link href='/myproducts' className='py-3 inline-block w-full'>My products</Link> </li>
                </ul>
                <div className='flex item-center bg-gray-100 p-2 rounded-lg my-4 py-3'>
                    <input
                        type='text'
                        className='outline-none w-full bg-transparent ml-2 caret-blue-500 placehoder:font-light placehoder:text-gray-600 text-[15px]'
                        placeholder='Search'
                        autoComplete='false'
                    />
                    <button><BiSearch size={20} className='opacity-50'/> </button>
                </div>
            </div>

    </div>
  )
}

export default Navbav