import React from 'react'
import logo from "./../assets/logo.svg"

const Balance = () => {
  return (
    <div className='w-full p-7 bg-orange rounded-2xl flex justify-between items-center mb-5' >
      <div className='flex flex-col text-white '>
        <p>My balance </p>
        <h3 className='font-bold text-[1.7rem]'>${921.48}</h3>
      </div>
      <img src={logo} alt='logo' className='' />
    </div>
  )
}

export default Balance
