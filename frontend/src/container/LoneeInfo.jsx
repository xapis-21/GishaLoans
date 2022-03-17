import React, { useEffect, useState } from 'react'
import toonavatar from 'cartoon-avatar'
import { client } from '../client'
import { useParams} from "react-router-dom";



function LoneeInfo() {
    const avatar = toonavatar.generate_avatar()

    let { slug } = useParams();

    const [loanees, setLoans] = useState(null);

    const query = '*[_type == "posts"]'

    // useEffect(() => {
    //   client.fetch(query).then((data) => {
    //       console.log('article with more than one seat:')
    //       console.log(data)
    //       setLoans(data)
    //       console.log(slug)
    // })
    // .catch(console.error);
    // }, [slug]);

  return (
    <>
    {loanees && loanees.map(post =>{
         return( (slug === post.slug.current) &&
    <div className='w-full mx-auto mt-20' style={{maxWidth:'1000px'}}>
        <div>
            <div className='w-full h-96 border bg-center bg-cover bg-no-repeat' style={{background:"url('https://img.freepik.com/free-vector/coworking-office-with-tables-chairs-laptops_107791-8165.jpg?t=st=1647456541~exp=1647457141~hmac=99fa2c9874890dd86c35e3879dab5e0bd3008fce12d85950eb7059a4c571f0d6&w=1000')", backgroundSize:'cover'}}>
                <h1 className='bg-black/50 w-full h-full grid place-items-center text-4xl text-white font-bold'>OKECHA OSCAR</h1>
            </div>

            <div className='p-2 w-40 h-40 bg-white rounded-full -translate-y-20  translate-x-10 grid place-items-center'>
                <img src={avatar} alt="" className='rounded-full'/>
            </div>

            <div className='flex'>
                <div className="flex flex-col">

                </div>
                <div className="flex-1"></div>
                <div className=""></div>
            </div>
        </div>
    </div>
         )}
       )}
    </>
  )
}

export default LoneeInfo