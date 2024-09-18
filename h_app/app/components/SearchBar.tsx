import React from 'react'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div>
        <div className='flex items-center bg-gray-100 p-2 rounded-full max-md:hidden'>
            <button><BiSearch size={20} className='opacity-50'/> </button>
            <input
            type='text'
            className='outline-none bg-transparent ml-2 caret-blue-500 placehoder:font-light placehoder:text-gray-600 text-[15px]'
            placeholder='Search'
            />
            
        </div>


    </div>
  )
}

export default SearchBar