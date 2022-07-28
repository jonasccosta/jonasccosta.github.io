import React from 'react'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import HomePageContent from '../components/HomePageContent';

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <NavBar/>
        <HomePageContent/>
      </div>
      <Footer/>
    </div>
  )
}
