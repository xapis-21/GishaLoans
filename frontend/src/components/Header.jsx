import React from 'react'
import Search from  './Search'

function Header() {
  return (
   <div className="bg-yellow-500 w-full">
      <div className='flex items-center bg-yellow-500 mx-auto  h-20 w-full' style={{justifyContent:'space-between',maxWidth:'1200px'}}>
       <div className="logo mx-4 text-2xl font-bold w-72">GISHA LOANS</div>

       <div className="flex justify-center w-full mt-4 h-14">
            <button className='text-black hover:bg-yellow-500 hover:border-0 hover:text-white duration-300 text-lg rounded-full w-24 cursor-pointer h-10 px-4 py-2'>All</button>
            <button className='text-black hover:bg-yellow-500 hover:border-0 hover:text-white duration-300 text-lg rounded-full w-24 cursor-pointer h-10 px-4 py-2'>Pending</button>
            <button className='text-black hover:bg-yellow-500 hover:border-0 hover:text-white duration-300 text-lg rounded-full w-25 cursor-pointer h-10 px-4 py-2'>Cleared</button>
        </div>

       <div className="user left-auto mx-4 flex items-center font-bold">
            <Search/>
            <div className='bg-black h-6 mx-4' style={{width:'2px'}}></div>
            <div className="">
              Hello,
            <span className='ml-2 text-black'>Admin</span>
            </div>
       </div>
    </div>
   </div>
  )
}

export default Header