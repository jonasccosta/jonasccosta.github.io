import React from 'react'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import ContactPageContent from "../components/ContactPageContent";

export default function Contact() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
        <div>
            <NavBar/>
            <ContactPageContent/>
        </div>
        <Footer/>
    </div>
  )
}
