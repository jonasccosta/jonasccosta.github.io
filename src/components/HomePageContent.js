import React from 'react'
import Headshot from './Headshot'
import HomeText from './HomeText'
import {motion} from 'framer-motion'

export default function HomePageContent() {
  return (
    <div className='d-flex justify-content-center'>
    <motion.div
        initial={{opacity: 0, y: 90}}
        animate={{opacity: 1, y: 0}} className='d-flex flex-row w-75 justify-content-center align-items-center flex-wrap'>
            <div className='col-md-6 mt-6'>
                <HomeText/>
            </div>
            <div className='col-md-2 mt-6'>
                <Headshot/>
            </div>
    </motion.div>
</div>
    
  )
}
