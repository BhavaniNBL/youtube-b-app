import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
        <button className='px-5 py-2 m-2 rounded-lg bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button