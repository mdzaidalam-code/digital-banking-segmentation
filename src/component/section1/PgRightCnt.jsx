import React from 'react'
import RightSideCnt from './RightSideCnt'

function PgRightCnt(props) {
  
  console.log(props)
  return (
    <div className='py-2 lg:p-5 h-[90vh] sm:h-[75vh] lg:h-[85vh]  w-full lg:w-3/4 flex gap-4 lg:gap-5 overflow-x-auto'>
     {props.users.map(function(elem,key) {
      return <RightSideCnt
      key={key} id={key+1} img = {elem.img} tag={elem.tag} color={elem.color}/>
     })}
    </div>
  )
}

export default PgRightCnt