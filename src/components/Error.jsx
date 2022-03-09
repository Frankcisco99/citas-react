import React from 'react'

export const Error = ({children}) => {
  return (
    <div className='text-center bg-red-700 text-white font-bold p-2 mb-2 rounded-md'>
          {children}
        </div>
  )
}
