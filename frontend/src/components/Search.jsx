import React from 'react'
import {FaUserPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Search() {
  return (
    <div className='bg-white shadow rounded-lg flex items-center pr-2'>
        <form action="" className='h-20 py-4 flex flex-1 items-center px-2'>
            <input type="text" className='h-12 px-4 py-2 rounded-full border border-yellow-500 w-full' placeholder='search client' required/>
        </form>
        <Link to='/add_loan_client'>
            <div className="h-14 flex items-center w-14 bg-gray-100 rounded-full justify-center hover:bg-yellow-50 duration-200 cursor-pointer">
                <FaUserPlus className='text-yellow-500 cursor-pointer text-2xl'/>
            </div>
        </Link>
    </div>
  )
}

export default Search