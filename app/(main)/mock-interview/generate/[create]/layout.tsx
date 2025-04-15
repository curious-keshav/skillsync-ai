/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react'
import { BarLoader } from "react-spinners"

const Layout = ({ children }: { children: any }) => {
    return (
        <div className=''>
            <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color="gray" />}>
                {children}
            </Suspense>
        </div>
    )
}

export default Layout
