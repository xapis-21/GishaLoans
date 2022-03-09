import React from 'react'
import { format } from 'fecha';
// export const PrintOut = React.forwardRef(({date,name,loan,fee}),ref) =>{
//   return (
    
//   )
// };
const date = format(new Date(), 'dd/MMM/YYYY hh:mm:ss'); 

  export const PrintOut = React.forwardRef(({name,loan,fee,refree},ref) => {
    return (
        <div ref ={ref} className="print-container w-full" style={{ margin: "0", padding: "20" }}>
            <div className="">
                <h1 className='w-full text-2xl font-bold'>Gisha Loans</h1>
                <p className="font-semibold text-lg">Kalerwe Market</p>
                <p className="font-semibold text-lg">+256 702 939679</p><p className='font-semibold text-lg'> +256 780 569011</p>
                <p className="mt-4 font-semibold text-lg">Date: {date}</p>
            </div>
            <div className="mt-8">
                <h1 className="underline text-2xl text-center w-full mt-8 mb-4">TRANSACTION DETAILS</h1>
                <div className='text-2xl w-full'>
                     I <span className='underline'>{name}</span> have recieved a loan of amount <span className='italic'>UGX {loan}</span> from Gisha loans
                </div>
                <div className='w-4/6 mx-auto'>
                <h1 className="underline text-2xl text-center w-full mt-8 mb-4 font-bold">LOAN DETAILS</h1>
                    <div className='text-2xl w-full flex justify-between mb-2'>Loan value: <span className='font-semibold'>UGX {loan}</span></div>
                    <div  className='text-2xl w-full flex justify-between mb-2'>Fee: <span className='font-semibold'>UGX {fee}</span></div>
                    <div  className='text-2xl w-full flex justify-between mb-2'>Total Amount: <span className='font-semibold'>{parseInt(loan) + parseInt(fee)}</span></div>
                    <div  className='text-2xl w-full flex justify-between mb-2'>Guarator: <span className='font-semibold'>{refree}</span></div>
                </div>
                <div className='text-lg mt-24 flex flex-col'>
                       <span className='mt-4 '>Issued by: {'name'}</span>
                       <span className='mt-4 '>Signature: ___________________</span>
                </div>
            </div>
        </div>
    );
  });

