import React from 'react'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"

export default function NavBarItem({pages}) {
  return (
    pages.map(page =>{
        return (
            <motion.li key={page.name} className="nav-item m-2" whileHover={{scale: 1.2}}>
                <NavLink className={(navData) => (navData.isActive ? 'nav-link  text-secondary' : 'nav-link text-light')} to={page.link} ><p className='p-0 m-0'>{page.name}</p></NavLink>
            </motion.li>
        )
    })
    
  )
}
