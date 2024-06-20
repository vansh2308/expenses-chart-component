import React, { useEffect, useState } from 'react'
import data from "./../data.json"

const Charts = () => {
  return (
    <div className='w-full p-7 bg-white rounded-2xl flex justify-between flex-col' >
      <h3 className='font-bold text-[1.7rem]'>Spending - Last 7 days</h3>

      <div className='pb-6 mt-0 w-full min-h-max bars-wrapper'>
        {
          data.map((item, key) => {
            return (
              <Bar day={item.day} amt={item.amount} key={key} idx={key} />
            )
          })
        }
      </div>



      <div className='w-full flex justify-between items-end pt-6 border-t-[1px] border-brown/40 '>
        <div className='flex flex-col text-brown'>
          <p className='font-normal text-brown/70'>Total this month </p>
          <h3 className='font-bold text-[2.1rem]'>${478.33}</h3>
        </div>
        <div className='flex flex-col text-brown text-sm text-right pb-1 pr-2'>
          <p className='font-bold'>+2.4% </p>
          <p className='font-normal text-xs text-brown/70'>from last month </p>
        </div>
      </div>


    </div>
  )
}

export default Charts


const Bar = ({ day, amt, idx }) => {
  const [barColor, setBarColor] = useState("orange")
  useEffect(() => {
    const d = new Date().getDay() - 1
    if (idx == d) {
      setBarColor("blue")
    }
  })

  return (
    <div className='h-64 w-full flex flex-col items-center justify-end bar' >

      <div className='w-[120%] bg-brown py-2 rounded-md mb-2 text-white hidden items-center justify-center text-xs tooltip'>${amt} </div>

      {
        barColor == "orange" ? 
        <div className="w-full bg-orange h-48 rounded-md mb-2 cursor-pointer flex-shrink-0 bar-col" style={{height: `${amt*192/60}px`}}></div> :
        <div className="w-full bg-bleu h-48 rounded-md mb-2 cursor-pointer flex-shrink-0 bar-col" style={{height: `${amt*192/60}px`}}></div> 
      }

      <span className='text-sm'>{day}</span>
    </div>
  )
}
