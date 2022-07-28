import React from 'react'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import AboutPageContent from '../components/AboutPageContent';

export default function AboutPage() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <NavBar/>
        <AboutPageContent/>
        </div>
      <Footer/>
    </div>
  )
}
