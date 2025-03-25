/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const CoverLetter = async ({params}:{params:any}) => {
    const id = await params.id;
    console.log(id);
  return (
    <div>
      CoverLetter: {id}
    </div>
  )
}

export default CoverLetter
