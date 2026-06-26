import React from 'react'


import PgLeftCnt from './PgLeftCnt';
import PgRightCnt from './pgRightCnt';


function PageContent(props) {
  console.log(props)
  return (
    <div className='w-full flex-1 flex flex-col gap-8 lg:gap-10 px-5 sm:px-8 lg:pl-15 lg:pr-10 pb-10 lg;pb-0 lg:flex-row'>
      
      <PgLeftCnt/>
      <PgRightCnt
      users={props.users}/>
      
    </div>
  )
}

export default PageContent