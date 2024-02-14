import React from 'react'
import ContactItem from './ContactItem';
import {motion} from 'framer-motion'

export default function ContactPageContent() {

  return (
    <div className='container me-auto ms-auto w-75 h-100'>
      <motion.div
      initial={{opacity: 0, y: 90}}
      animate={{opacity: 1, y: 0}}>
        <p className='h1 mt-5 mb-5 text-secondary m'>Contact</p>
        <p className='text-light fs-6'>
        If you are interested in what I do or have an opportunity that you think I would be a good fit for, feel free to reach out!  I welcome any comments or feedback.
        </p>

        <div className='d-flex justify-content-between w-100'>
            <ContactItem/>
        </div>
      </motion.div>
    </div>
  )
}
