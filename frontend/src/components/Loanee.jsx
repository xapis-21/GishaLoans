import React from 'react'
import { format } from 'fecha';


function Loanee({post}) {

    const {_createdAt,name,status,loanAmount,close} = post

    const date = format(new Date(_createdAt), 'dd.MMM.YYYY'); 

  return (
    <>
          <ul className='flex w-full justify-between h-14 bg-white rounded-lg items-center px-2 mt-1'>
                    <li className='hidden text-sm font-normal sm:flex items-center justify-start sm:justify-center flex-1'>{date}</li>
                    <li className='text-sm font-normal flex items-center justify-center flex-1'>{name}</li>
                    <li className={`text-xs font-normal flex items-center justify-center flex-1  font-extrabold ${status === 'pending' ? 'text-red-500' : 'text-green-500'}`}>{status}</li>
                    <li className='hidden text-sm font-normal sm:flex items-center justify-center flex-1'>{loanAmount}</li>
                    <li className='text-sm font-normal flex items-center justify-center flex-1'>{close}</li>
            </ul>
    </>
  )
}

export default Loanee