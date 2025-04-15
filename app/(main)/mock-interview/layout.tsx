/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react'
import { BarLoader } from "react-spinners"

const Layout = ({ children }: { children: any }) => {
    return (
        <div className='px-5'>
            <h3 className="mb-8 border-4 border-dotted bg-yellow-100 text-muted border-muted-foreground rounded-xl p-4 text-center font-bold uppercase shadow-sm tracking-wide">
                🚧 Mock Interview section is currently <span className='font-bold bg-black p-1 rounded-lg text-muted-foreground'>in progress.</span> Below data is dummy data. Stay tuned!
            </h3>
            <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color="gray" />}>
                {children}
            </Suspense>
        </div>
    )
}

export default Layout
