import React from 'react'
import {HiUserCircle} from 'react-icons/hi'

function Header() {
  return (
    <div className='flex items-center bg-yellow-500 mx-auto lg:rounded-lg h-14 w-full' style={{justifyContent:'space-between'}}>
       <div className="logo mx-4">GISHA LOANS</div>
       <div className="user left-auto mx-4 flex items-center">
            <HiUserCircle className='text-2xl'/>
            <span className='ml-2'>Admin</span>
       </div>
    </div>
  )
}

export default Header