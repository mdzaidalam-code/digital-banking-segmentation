import React from 'react'
import {RiArrowRightLine} from "@remixicon/react";
function RightSideCnt(props) {
  return (
    <div className='h-full w-[85%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-20px)/2)] pos1:w-[calc((100%-40px)/3)] shrink-0 relative overflow-hidden rounded-3xl lg:rounded-4xl'>
      <img src={props.img} alt="" className='h-full w-full object-cover'/>

      <div className='absolute  h-full w-full top-0 left-0 p-4 sm:p-5 lg:p-7 flex flex-col justify-between '>

        <h1 className="bg-white rounded-full w-8 h-8 grid place-items-center font-bold text-lg ">
          {props.id}
        </h1>

        <div className='flex flex-col justify-between'>
          <h3 className='mb-5 lg:mb-10 text-white text-base pos1:text-sm font-semibold leading-relaxed'>Loremojhjd oshkjdanrijaw jbcadfghr sit amet consectetur adipisicing elit. Provident aspern ieou exercitationem recusandae ad quos sit.</h3>

          <div className='flex justify-between pos1:justify-center pos2:justify-between items-center gap-2 min-w-0'>
            <button style={{backgroundColor:props.color}} className='min-w-0 flex-1 sm:flex-none truncate px-4 sm:px-6 lg:px-9 py-1.5 text-base sm:text-base lg:text-base font-semibold rounded-4xl text-white'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 grid place-items-center rounded-full text-white pos1:hidden pos2:block'><RiArrowRightLine w-4 h-4 sm:w-5 sm:h-5/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideCnt