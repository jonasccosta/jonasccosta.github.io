import React from 'react'
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
    <nav className="navbar navbar-expand-lg m-0 p-0 w-100 bg-muted shadow">
        
            <div className="container-fluid">
                <Header/>
                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
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


