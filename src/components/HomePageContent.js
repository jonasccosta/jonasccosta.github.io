import React from 'react'
import Headshot from './Headshot'
import HomeText from './HomeText'

export default function HomePageContent() {
  return (
    <div className='d-flex flex-row me-auto ms-auto mb-0 justify-content-center align-items-center flex-wrap'>
        <div className='col-4 me-5 mt-8 mb-8'>
            <HomeText/>

        </div>

        <div className='col-4 mt-6 ms-5' style={{ width: '333px', height: '500px'}}>
            <Headshot/>

        </div>
    </div>
  )
}
