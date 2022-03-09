import React from 'react'
import {FaUserPlus} from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi'
import {Link} from 'react-router-dom'

function Search() {
  return (
    <div className='rounded-lg flex flex-row-reverse items-center pr-2'>
      
            <div className="h-10 flex items-center w-10 bg-black rounded-full justify-center hover:bg-yellow-50 duration-200 cursor-pointer">
            <HiOutlineSearch
            className='text-yellow-500 cursor-pointer text-2xl'/>
            </div>
        <form action="" className='h-20 py-4 flex flex-1 items-center px-2'>
            {/* <input type="text" className='h-10 px-4 py-2 rounded-full border border-black w-full bg-transparent placeholder:text-black/40' placeholder='search client' required/> */}
        </form>
        <Link to='/add_loan_client'>
            <div className="h-10 flex items-center w-10 bg-black rounded-full justify-center hover:bg-yellow-50 duration-200 cursor-pointer">
                <FaUserPlus className='text-yellow-500 cursor-pointer text-2xl'/>
            </div>
        </Link>
    </div>
  )
}

export default Search