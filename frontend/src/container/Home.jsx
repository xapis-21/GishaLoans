import React from 'react'
import Content from './Content'

function Home() {
  return (
   <div className='mx-auto' style={{maxWidth:'1000px'}}>
       <div className='w-full px-2 mt-8'>
          <Content/>
       </div>
   </div>
  )
}

export default Home