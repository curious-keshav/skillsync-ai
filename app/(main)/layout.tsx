/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const MainLayout = ({children}:{children:any}) => {
  // Redirect to onbaording
  
  return (
    <div className='container mx-auto mt-24 mb-20'>
      {children}
    </div>
  )
}

export default MainLayout
