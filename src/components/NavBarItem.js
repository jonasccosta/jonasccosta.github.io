import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBarItem({pages}) {
  return (
    pages.map(page =>{
        return (
            <li key={page.name} className="nav-item m-2">
                <NavLink className={(navData) => (navData.isActive ? 'nav-link  text-secondary' : 'nav-link text-light')} to={page.link} ><p className='p-0 m-0'>{page.name}</p></NavLink>
            </li>
        )
    })
    
  )
}
