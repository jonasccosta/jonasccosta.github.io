import React from 'react'
import Project from './Project'
import {motion} from 'framer-motion'


export default function ProjectsPageContent() {
    
  return (
    <div className='container me-auto ms-auto w-75 h-100'>
      <motion.div
      initial={{opacity: 0, y: 90}}
      animate={{opacity: 1, y: 0}}>
        <p className='h1 mt-5 mb-5 text-secondary m'>Projects</p>
        <p className='text-light fs-6 mb-5'>
        This page contains a few of my most relevant software design and development personal works. For more information about them, to see other projects or code samples, check my <a href="https://github.com/jonasccosta/" className="text-secondary text-decoration-none">GitHub page</a> .
        </p>

        <div className='row '>
            <Project/>
          </div>
      </motion.div>
        </div>
  )
}
