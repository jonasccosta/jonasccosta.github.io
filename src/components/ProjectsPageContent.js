import React from 'react'
import Project from './Project'
import recoveryresourcesmap from '../assets/recoveryresourcesmap_2.jpg'
import website10 from '../assets/website1.0.png'
import website20 from '../assets/website2.0.png'
import countonme1 from '../assets/countonme1.png'
import renegotiatingDebts from '../assets/renegotiatingdebts.png'
import leilacabeleireira from '../assets/leilacabeleireira.png'
import cardsafe from '../assets/cardsafe.png'
import aloneonceagain from '../assets/AloneOnceAgain.jpg'
import inclusora from '../assets/inclusora.png'

export default function ProjectsPageContent() {
    const projects = [
        {name: "Inclusora", image: inclusora, description: "Even if unintentionally, people can use language to spread harmful ideas. To create a more welcoming world for all, we designed and developed Inclusora, a website built using Angular and Node.js that checks if a text is written in an inclusive way. After the user inputs a piece of writing, such as an essay, an email, or even a simple text message, they get suggestions on how they can change their words to be more inclusive. This way, Inclusora focuses on inclusion, one word at a time.",skills: "Angular, Node.js, Typescript"},
        {name: "Recovery Resources Map", image: recoveryresourcesmap, description: "In the summer of 2022, I had an internship with YourPath, a startup that offers support to people going through substance use issues. There, I designed and developed the Recovery Resources Map, a web application where the Care Coordinators would be able to quickly filter by gender, age, and treatment methods, for example, and find the contact information for each resource program so they can reffer a patient to a program that best fit their needs and goals.", skills: "MongoDB, EJS, Bootstrap, JavaScript, Node.js, Git"},
        {name: "Alone Once Again", image: aloneonceagain, description:"In my Video Games: Coding and Narrative class, three other students and I worked during the entire semester to build all the aspects of a video game. Hence, we created Alone Once Again, which is a 2D platformer game in which the player controls Violet, with the goal of taking her home while avoiding several obstacles. It was a great oportunity to work with an interdisciplinary team, where I learned a lot from people who had experience with narrative, world building, graphics and audio design.", skills: "Unity, C#, Git, Animation, Game Development"},
        {name: "Personal Website 1.0", image: website10, description: "To have a place where I can show my portfolio, I decided to create a personal website. With the tools I was familiar with at the time, I built a simple, but fully functional website, containing information about me, hobbies, projects, and contact information. In addition, all pages had its version in portuguese, with is my mother tongue. I hosted it in GitHub pages and it was an interesting project to solidify my basic web development skills.", skills: "JavaScript, HTML, CSS"},
        {name: "Personal Website 2.0", image: website20, description: "After a while, I noticed that my previous personal website was not as efficient as I wanted it to be. Hence, I developed this current website. Using several frameworks, I significantly reduced the amount of repeated code and made a more responsive and cohesive website. This experience made me realize that there's always room for improvement in my projects (including this website!).", skills: "JavaScript, React, Bootstrap"},
        {name: "CountOnMe", image: countonme1, description: "CountOnMe is the result of Macathon, a 24-hour annual innovation and creativity competition organized by my college. My teammates and I designed an app disguised as a calculator that enables victims of domestic violence to find secure help in critical moments. I envisioned the technical aspects, helped conduct background research, and prepared the presentation. The app is still in the design phase, but we have received positive feedback and were featured on the Star Tribune (the biggest newspaper in Minnesota)", skills: "Figma"},
        {name: "CardSafe", image: cardsafe, description: "In my Software Design and Development class, my teammates and I designed Card Safe, a fully functional mobile app that stores gift cards. Over the course of seven weeks, I learned Flutter and Dart and used them to create the database that stored the cards, conduct software testing, and explore ways to use APIs to build the app. Since the class was entirely remote due to the COVID-19 pandemic, most of the work was done asynchronously.", skills: "Flutter, Dart, Figma, MySQL"},
        {name: "Cabeleireira Leila", image: leilacabeleireira, description: "Inspired by a video that went viral in 2020 in Brazil, I developed an app using Java and Android Studio that allows clients to schedule hairdresser appointments with Cabeleireira Leila. It contains a portfolio of previous hair and nails works, and it sends an email to the client with the details about their appointment. Although I  built it in a humourous manner, this app was an interesting way I found to learn native Android Development.", skills: "Java, Android Studio"},
        {name: "Renegotiating Debts", image: renegotiatingDebts, description: "My first project ever was Renegotiating Debts. I created it as my Internal Assessment for my Computer Science class when I was still in High School. Inspired by a previous job, Renegotiating Debts is a software built with Java that intends to be a replacement for the spreadsheets that my employer used to calculate interest for its clients' debts. Based on how old the debt is and its value, the software calculates the updated values and dates based on the company's policies.", skills: "Java"}





    ]

  return (
    <div className='container me-auto ms-auto w-50 h-100'>
        <p className='h1 mt-5 mb-5 text-secondary m'>Projects</p>
        <p className='text-light fs-6 mb-5'>
        This page contains a few of my most relevant software design and development works. For more information about them, to see other projects or code samples, check my <a href="https://github.com/jonasccosta/" className="text-secondary text-decoration-none">GitHub page</a> .
        </p>

        <div className='row '>
          <div id="carouselExample" className="carousel carousel-dark slide">
              <div className="carousel-inner min-vh-100 shadow">
                <Project projects={projects}/>
              </div>
              <button className="carousel-control-prev button-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
              
          </div>

        </div>
 
  )
}
