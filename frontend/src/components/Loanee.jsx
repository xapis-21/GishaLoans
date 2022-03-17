import React,{useState,useEffect} from 'react'
// import { format } from 'fecha';
import { format} from 'date-fns'

function Loanee({post}) {

    const {_createdAt,name,status,loanAmount,close} = post
    const [date, setDate] = useState(null)

    useEffect(()=>{
      const dateFormat = _createdAt.slice(0,10); 
      setDate(format(new Date(dateFormat), "yyyy.MMM.dd"))
      // setDate(dateFormat)
    },[date])

    const handleClick = ()=>{
        console.log(date,_createdAt)
    }

  return (
    <>
          <ul className='flex w-full justify-between h-14 bg-white rounded-lg items-center px-2 mt-1 relative hover:shadow-2xl hover:scale-105 duration-200 cursor-pointer' onClick={handleClick}>
                    <li className='hidden text-sm font-normal sm:flex items-center justify-start sm:justify-start flex-1'>{date}</li>
                    <li className='text-sm font-normal flex items-left justify-start flex-1'>{name}</li>
                    <li className={`text-xs flex items-center justify-center flex-1  font-extrabold ${status === 'pending' ? 'text-red-500' : 'text-green-500'}`}>{status}</li>
                    <li className='hidden text-sm font-normal sm:flex items-center justify-center flex-1'>{loanAmount}</li>
                    <li className='text-sm font-normal flex items-center justify-center flex-1'>{close}
                    </li>
            </ul>
    </>
  )
}

export default Loanee