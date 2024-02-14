import React from 'react'
import {motion} from 'framer-motion';

import Hobbie from './Hobbie';

export default function HobbiesPageContent() {
    
  return (
    <div className='container me-auto ms-auto w-75 h-100'>
      <motion.div
      initial={{opacity: 0, y: 90}}
      animate={{opacity: 1, y: 0}}>
        <p className='h1 mt-5 mb-5 text-secondary m'>Hobbies</p>
        <p className='text-light fs-6 mb-5'>
            This is a list of the things I like to do besides writing code and working with software.
        </p>

        <div >
            <Hobbie/>
          </div>
      </motion.div>
     </div>
  )
}
