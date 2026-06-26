import React from 'react'

import {RiArrowRightUpLine} from "@remixicon/react";

function PgLeftCnt() {
  return (
    <div 
        className='w-full lg:w-1/3 pos1:w-1/4 flex flex-col justify-between gap-8 lg:gap-0'>
          <div>
            <h1 className='text-[1.8em]/[1.25] font-semibold pt-6 pb-4 sm:text-[2.2em]/[1.2] lg:text-[2.8em]/[1.2] lg:pt-10 lg:pb-5'>Prospective <div    className="inline bg-gray-200 rounded-full">customer</div> segmentation</h1>

            <h1 className='text-[0.9em]/[1.8] lg:text-[0.9em]/[2.2]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, nemo! ipsum dolor sit amet consectetur, adipisicing elit. Harum a fugit iste tempora at officia rem voluptatum dolor aperiam nulla.</h1>
          </div>
          <RiArrowRightUpLine className='w-15 h-15 lg:w-20 lg:h-20'/>
        </div>
  )
}

export default PgLeftCnt