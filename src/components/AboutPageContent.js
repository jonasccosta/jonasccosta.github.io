import React from 'react'
import resume from '../assets/Resume.pdf'
import {motion} from 'framer-motion';


export default function AboutPageContent() {
  return (
    <div className='container me-auto ms-auto w-75 h-100'>
      <motion.div
      initial={{opacity: 0, y: 90}}
      animate={{opacity: 1, y: 0}}>


        <p className='h1 mt-5 mb-5 text-secondary m'>About Me</p>
        <p className='text-light'>
        Hello! I am Jonas Costa, an Associate Developer Consultant at Solutia Consulting, with a passion for creating technology solutions that are not only efficient and innovative but also contribute positively to society. I strongly believe in the power of technology to foster social justice and promote accessibility for all.
        </p>

        <p className='text-light'>💼 Professional Experience </p>
        <p className='text-light'>
        In my previous internship, I had the opportunity to work closely with a startup dedicated to providing support for individuals struggling with substance use issues. As part of this role, I played a pivotal part in assembling and implementing a filterable map of over 450 treatment programs across Minnesota. Leveraging my skills in Google Maps API, EJS, Node.js, and MongoDB, I developed a user-friendly platform that enables individuals to easily find treatment programs tailored to their specific needs and located near their homes. This project exposed me to both the technical challenges of software development and the ethical considerations surrounding the handling of sensitive patient information.
        </p>

        <p className='text-light'>
        🚀 Technical Expertise
        </p>

        <p className='text-light'>
        I possess proficiency in .NET, Entity Framework, Angular, C#, and Visual Studio, which enables me to develop robust and scalable software solutions. Additionally, I have exposure to cloud platforms such as AWS and Azure, leveraging their capabilities to build secure and efficient applications. My understanding of these technologies allows me to deliver high-quality code and streamline development processes.
                  </p>

        <p className='text-light'>
        🌍 Accessibility and Social Justice
        </p>

        <p className='text-light'>
        Beyond technical expertise, I am deeply committed to promoting accessibility and social justice within the technology industry. I firmly believe that technology should be inclusive and empower all individuals, regardless of their backgrounds or abilities. I continuously strive to integrate accessibility features into the software I develop, ensuring that it can be accessed and used by everyone. Furthermore, I actively engage with initiatives and organizations that drive social change, such as the United World Colleges, aiming to create a more equitable and inclusive society.
        </p>

        <p className='text-light'>
        📚 Education
        </p>

        <p className='text-light'>
        I hold a Bachelor of Arts Degree in Mathematics and Computer Science from Macalester College. During my academic journey, I gained a strong foundation in software development principles, problem-solving techniques, and collaborative teamwork. I consistently seek opportunities to enhance my knowledge and stay updated with the latest industry trends.
        </p>


                <p className='text-light'>
                ✉️ If you want to get more details about me, check out my <a href={resume} className='text-secondary text-decoration-none'>resumé</a>. 
                </p>
      </motion.div>
    </div>
  )
}
