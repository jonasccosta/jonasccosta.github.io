import React from 'react'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import HobbiesPageContent from "../components/HobbiesPageContent";

export default function Hobbies() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
        <div className='mb-5'>
            <NavBar/>
            <HobbiesPageContent/>
        </div>
        <Footer/>
    </div>
  )
}
