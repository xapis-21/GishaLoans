import React, {useEffect,useState} from 'react'
import {client} from '../client'
import Loanee from '../components/Loanee'

function Content() {

        const [loanees, setLoans] = useState(null)

        const query = '*[_type == "loanee"] '
        useEffect(()=>{
             
                client.fetch(query).then((data) => {
                        setLoans(data)
                        console.log(data)
                })   
        },[])

  return (
    <div className='flex-col'>

        <div className="w-full flex justify-center mt-4 h-14">
            <button className='border text-yellow-500 hover:bg-yellow-500 hover:border-0 hover:text-white duration-300 text-xs font-bold rounded-full w-32 cursor-pointer h-12 px-4 py-2 mx-8'>ALL</button>
            <button className='border text-yellow-500 hover:bg-yellow-500 hover:border-0 hover:text-white duration-300 text-xs font-bold rounded-full w-32 cursor-pointer h-12 px-4 py-2 mx-8'>PENDING</button>
            <button className='border text-yellow-500 hover:bg-yellow-500 hover:border-0 hover:text-white duration-300 text-xs font-bold rounded-full w-32 cursor-pointer h-12 px-4 py-2 mx-8'>FULLY PAID</button>
        </div>

        <ul className='flex w-full justify-between h-14 bg-white border-b-4 rounded-lg items-center px-2 mt-4'>
                <li className='hidden text-sm font-semibold sm:flex items-center justify-center flex-1'>DATE</li>
                <li className='text-sm font-semibold flex items-center justify-center flex-1'>NAME</li>
                <li className='text-sm font-semibold flex items-center justify-center flex-1'>STATUS</li>
                <li className='hidden text-sm font-semibold sm:flex items-center justify-center flex-1'>OPEN</li>
                <li className='text-sm font-semibold flex items-center justify-center flex-1'>BALANCE</li>
        </ul>

        <div className="lonees">
               {loanees && loanees.map((loanee)=>(
                        <Loanee key={loanee._id} post={loanee}/>
               ))}
        </div>
        <ul className='flex w-full justify-between h-14 bg-black border-b-4 rounded-lg items-center px-2 mt-2 text-yellow-500'>
                <li className='hidden text-sm font-semibold sm:flex items-center justify-center flex-1'>TOTAL</li>
                <li className='text-sm font-semibold flex items-center justify-center flex-1'>20</li>
                <li className='text-sm font-semibold flex items-center justify-center flex-1'></li>
                <li className='hidden text-sm font-semibold sm:flex items-center justify-center flex-1'>1000,000</li>
                <li className='text-sm font-semibold flex items-center justify-center flex-1'>300000</li>
        </ul>

    </div>
  )
}

export default Content