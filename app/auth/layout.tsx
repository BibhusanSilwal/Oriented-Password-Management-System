import { db } from '@/lib/db'
import React from 'react'

const AuthLayout = async({children}:{children:React.ReactNode}) => {
  const user = await db.user   
  return (
    
    <div className='h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
        {children}
    </div>
  )
}

export default AuthLayout