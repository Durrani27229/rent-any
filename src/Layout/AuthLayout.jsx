import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='grid lg:grid-cols-2 min-h-screen'>
        <div>
            <img src="login.png" alt="login" className='w-[100%] h-[100%] object-cover hidden lg:block' />
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout
