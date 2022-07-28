import React, { useState } from 'react'
import Header from './Header.js'
import NavBarItem from './NavBarItem.js';

export default function NavBar() {
    const pages = [
        {name: "Home", link: "/"}, 
        {name: "About Me", link: "/about"}, 
        {name: "Projects", link: "/projects"}, 
        {name: "Hobbies", link: "/hobbies"}, 
        {name: "Contact", link: "/contact"}
    ]
  return (
    <nav className="navbar navbar-expand-lg bg-primary m-0 p-0 border-bottom border-2 border-secondary w-100 bg-primary shadow">
        
            <div className="container-fluid">
                <Header/>
                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                        <NavBarItem pages={pages}/>

                    </ul>
                </div>
                    
                
                
            </div>

    
    </nav>
  );
}


