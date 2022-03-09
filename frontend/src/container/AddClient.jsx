import React, { Component } from 'react'
import { useState,useRef } from 'react'
import {AiFillCloseSquare} from 'react-icons/ai'
import {client} from '../client'
import {Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print';
import {PrintOut} from '../components/PrintOut'

function AddClient() {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [fee, setFee] = useState('')
  const [successful, setSuccessful] = useState('')
  const [refree, setRefree] = useState('')
  const [refreeNumber, setRefreeNumber] = useState('')

  const doc = {
    _type: 'loanee',
    name: name,
    loanAmount: amount,
    fee: fee,
    refree:refree,
    refreeNumber: refreeNumber,
    status: 'pending',
    close: `${parseInt(amount) * 1.2}`
  }

  const handleAddClient = (e)=>{
    e.preventDefault()
    client.create(doc).then((res) => {
      console.log(`Loanee was created, here is the document ${res}`)
      setSuccessful('Loan transaction saved successfully')
      handlePrint()
      setTimeout(()=>{
        setSuccessful('')
      },3000)
    }).catch((error) =>{
      console.log(`lonee was not created, here is why ${error}`)
      setSuccessful('Loan transaction failed, consult technician')
      // setTimeout(()=>{
      //   setSuccessful('')
      //   setTimeout(handlePrint,1000)
      // },3000)
    })
  }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
  return (
    <div style={{maxWidth:'700px'}} className='mx-auto w-full flex-col justify-center h-fit items-center'>
     <div className="hidden">
      <PrintOut ref={componentRef}  date={'date'} name={name} loan={amount} refree={refree} fee={fee}/>
     </div>
    <div className="exit w-full h-8 flex items-center justify-end mt-4 cursor-pointer pr-8">
       <Link to ='/' title='close'>
          <AiFillCloseSquare className='text-4xl hover:text-yellow-500 cursor-pointer'/>
       </Link>
    </div>

      <h1 className='w-full h-14 mt-12 text-center text-2xl font-bold'>REGISTER NEW LOAN CLIENT</h1>

      <form action="" onSubmit={handleAddClient} className='mt-2 h-4/6 flex-col flex justify-center px-2'>
          <div className="form_group flex-col flex w-full mb-8">
              <label htmlFor="name">Client's Name</label>
              <input type="text" id='name' className='bg-transparent border border-black h-12 px-4 rounded focus:outline-none focus:border-0 focus:bg-yellow-50 placeholder:font-light placeholder:text-slate-400 py-2 mt-4' placeholder='Enter client name' onChange={(e)=>{
                setName(e.target.value)
              }}/>
          </div>
          <div className="form_group flex-col flex w-full mb-4">
              <label htmlFor="amount">Cash Out</label>
              <input type="text" id='amount' className='bg-transparent border border-black h-12 px-4 rounded focus:outline-none focus:border-0 focus:bg-yellow-50 placeholder:font-light placeholder:text-slate-400 py-2 mt-2' placeholder='Enter amount' onChange={(e)=>{
                setAmount(e.target.value)
              }}/>
          </div>
          <div className="form_group flex-col flex w-full mb-4">
              <label htmlFor="fee">Application Fee</label>
              <input type="text" id='fee' className='bg-transparent border border-black h-12 px-4 rounded focus:outline-none focus:border-0 focus:bg-yellow-50 placeholder:font-light placeholder:text-slate-400 py-2 mt-2' placeholder='Enter application fee'
              onChange={(e)=>{
                setFee(e.target.value)
              }}/>
          </div>
          <div className="form_group flex-col flex w-full mb-4">
              <label htmlFor="refree">Guarantor</label>
              <input type="text" id='refree' className='bg-transparent border border-black h-12 px-4 rounded focus:outline-none focus:border-0 focus:bg-yellow-50 placeholder:font-light placeholder:text-slate-400 py-2 mt-2' placeholder="Enter guarantor's name"
              onChange={(e)=>{
                setRefree(e.target.value)
              }}/>
          </div>
          <div className="form_group flex-col flex w-full mb-4">
              <label htmlFor="refreeNumber">Guarantor Phone Number</label>
              <input type="text" id='refreeNumber' className='bg-transparent border border-black h-12 px-4 rounded focus:outline-none focus:border-0 focus:bg-yellow-50 placeholder:font-light placeholder:text-slate-400 py-2 mt-2' placeholder="Enter guarantor's phone number"
              onChange={(e)=>{
                setRefreeNumber(e.target.value)
              }}/>
          </div>

          <button className='bg-black h-14 text-white w-40 mx-auto mt-4 rounded hover:bg-yellow-500  active:bg-yellow-500 focus:bg-yellow-500 cursor-pointer duration-300' type='submit'>SAVE & PRINT</button>
      </form>
      <small className={`font-bold text-sm text-center mt-2 w-full flex justify-center items-center ${successful ==='Loan transaction failed, consult technician' ? 'text-red-500' : 'text-green-500'}`}>{successful}</small>
    </div>
  )
}

export default AddClient