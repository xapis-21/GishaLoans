import React, {useEffect,useState} from 'react'
import {client} from '../client'
import Loanee from '../components/Loanee'

function Content() {

        const [loanees, setLoans] = useState(null)

        const query = '*[_type == "loanee"] | order(_createdAt desc) '
        useEffect(()=>{
             
                // client.fetch(query).then((data) => {
                //         setLoans(data)
                //         console.log(data)
                // })   

                client
                .delete({query})
                .then(console.log)
                .catch(console.error)
        },[])

  return (
    <div className='flex-col'>
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